import { Component, OnInit } from '@angular/core';
import { ISpace} from './space';
import { SpaceService } from './space.service';

@Component({
  selector: 'app-space-rocket',
  templateUrl: './space-rocket.component.html',
  styleUrls: ['./space-rocket.component.css']
})
export class SpaceRocketComponent implements OnInit {
  rocketName = 'Big Times Flying To A New Universe';
  showButton = false;
  imageWidth = 50;
  imageMargin = 2;
  listFilter = 'rocket';
  spaces: ISpace[];

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
    this.spaces = this.spaceService.getRockets();
  }

  toggleButton(): void {
    this.showButton = !this.showButton;
  }
}
