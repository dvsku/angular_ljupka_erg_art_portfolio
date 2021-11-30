import { Component } from '@angular/core';
import { dolls } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-dolls',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./dolls.component.scss']
})
export class DollsComponent extends BasePortfolioComponent {
    images = dolls;
}
