import { Component } from '@angular/core';
import { trees } from 'src/app/assets';
import { Image } from 'src/app/models/Image';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    image1: Image = trees[6];
    image2: Image = trees[7];
    image3: Image = trees[1];
    image4: Image = trees[9];

    constructor() { }
}
