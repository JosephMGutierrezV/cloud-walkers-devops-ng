import { Component, Input, OnInit } from '@angular/core';

export const DEFAULT_PLAYER_WIDTH = 640;
export const DEFAULT_PLAYER_HEIGHT = 390;

@Component({
  selector: 'c-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class CYoutubePlayerComponent implements OnInit {
  @Input() videoId: string = '';
  @Input() width: number = DEFAULT_PLAYER_WIDTH;
  @Input() height: number = DEFAULT_PLAYER_HEIGHT;
  private player: any;

  constructor() {}

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    const objectWindow = window as any;

    objectWindow['onYouTubeIframeAPIReady'] = () => {
      this.player = new objectWindow['YT'].Player('c-player', {
        height: this.height,
        width: this.width,
        videoId: this.videoId,
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    };
  }

  onPlayerReady(event: any) {
    event.target.playVideo();
  }

  onPlayerStateChange(event: any) {
    const objectWindow = window as any;
    if (event.data === objectWindow['YT'].PlayerState.PLAYING) {
      this.player.stopVideo();
    }
  }
}
