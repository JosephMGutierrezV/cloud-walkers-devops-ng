import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { UniqueComponentId } from '../../utils/unique-id.utils';

export const DEFAULT_PLAYER_WIDTH = 640;
export const DEFAULT_PLAYER_HEIGHT = 390;


//TODO: Add support multiple players
@Component({
  selector: 'c-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class CYoutubePlayerComponent implements OnInit, AfterViewInit {
  @Input() videoId: string = '';
  @Input() width: number = DEFAULT_PLAYER_WIDTH;
  @Input() height: number = DEFAULT_PLAYER_HEIGHT;
  @Input() autoplay: boolean = false;
  @Input() start: number = 0;
  @Input() end: number = 0;

  private player: any;
  public uniqueId: string = '';

  constructor() {
    this.uniqueId = UniqueComponentId();
    if (!this.isYouTubeScriptLoaded()) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }
  }

  ngOnInit() {
    const objectWindow = window as any;
    objectWindow['onYouTubeIframeAPIReady'] = () => {
      this.player = new objectWindow['YT'].Player(this.uniqueId, {
        height: this.height,
        videoId: this.videoId,
        width: this.width,
        autoplay: this.autoplay,
        startSeconds: this.start,
        endSeconds: this.end,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    };
  }

  ngAfterViewInit(): void {
    if (this?.player) {
      this.player.loadVideoById(this.videoId);
    }
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    const objectWindow = window as any;
    if (event.data === objectWindow['YT'].PlayerState.PLAYING) {
      if (this?.player) {
        this.player.stopVideo();
      }
    }
  }

  private isYouTubeScriptLoaded(): boolean {
    return (
      document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      ) !== null
    );
  }
}
