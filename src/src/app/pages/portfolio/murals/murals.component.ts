import { Component } from '@angular/core';
import { mural } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-murals',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./murals.component.scss']
})
export class MuralsComponent extends BasePortfolioComponent {
    images = mural;
}
