import { Component } from '@angular/core';
import { portret } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-portrets',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./portrets.component.scss']
})
export class PortretsComponent extends BasePortfolioComponent {
    images = portret;
}
