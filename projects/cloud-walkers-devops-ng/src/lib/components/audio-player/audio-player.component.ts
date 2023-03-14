import { Component, Input, OnInit } from '@angular/core';
import { IParamsAudioPlayer } from '../../entities/interfaces';

@Component({
  selector: 'c-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
})
export class CAudioPlayerComponent implements OnInit {
  @Input() params: IParamsAudioPlayer = {
    src: '',
    textNotSupported: 'Your browser does not support the audio element.',
  };

  constructor() {}

  ngOnInit() {}
}
