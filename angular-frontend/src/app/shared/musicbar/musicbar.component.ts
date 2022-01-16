import { Component, OnInit } from '@angular/core';
import {
  faPlay, faPause, faStepBackward, faStepForward, faVolumeMute,
  faVolumeDown, faVolumeUp, faStop, faRandom, faRedo, IconDefinition
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-musicbar',
  templateUrl: './musicbar.component.html',
  styleUrls: ['./musicbar.component.scss']
})
export class MusicbarComponent implements OnInit {

  //Fontawesome Icons
  iconPlay = faPlay;
  iconPause = faPause;
  iconBackward = faStepBackward;
  iconForward = faStepForward;
  iconVolumeMute = faVolumeMute;
  iconVolumeDown = faVolumeDown;
  iconVolumeUp = faVolumeUp;
  iconStop = faStop;
  iconRandom = faRandom;
  iconRedo = faRedo;

  //Metadata
  title = "<<title>>";
  artist = "<<artist>>";
  length = "<<mm:ss>>";
  album = "<<album>>";

  //Logic
  playButton = this.iconPlay;
  shuffle = false;


  constructor() { }

  ngOnInit(): void {
  }

  onPausePlay(){
    if(this.playButton == this.iconPlay) this.playButton = this.iconPause;
    else this.playButton = this.iconPlay;
  }

}
