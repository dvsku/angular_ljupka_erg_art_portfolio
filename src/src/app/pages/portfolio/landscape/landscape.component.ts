import { Component } from '@angular/core';
import { landscape } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-landscape',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./landscape.component.scss']
})
export class LandscapeComponent extends BasePortfolioComponent {
    images = landscape;
}
