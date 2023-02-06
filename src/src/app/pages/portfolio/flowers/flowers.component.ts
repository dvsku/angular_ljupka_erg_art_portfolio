import { Component } from '@angular/core';
import { flowers } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-flowers',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent extends BasePortfolioComponent {
    images = flowers;
}
