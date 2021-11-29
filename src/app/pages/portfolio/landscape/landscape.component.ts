import { Component, OnInit } from '@angular/core';
import { landscape } from 'src/app/assets';

@Component({
  selector: 'app-landscape',
  templateUrl: './landscape.component.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent implements OnInit {

    images = landscape;

  constructor() { }

  ngOnInit(): void {
  }

}
