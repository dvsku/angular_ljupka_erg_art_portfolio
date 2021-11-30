import { Component } from '@angular/core';
import { birds } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-birds',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent extends BasePortfolioComponent {
    images = birds;
}
