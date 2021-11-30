import { Component } from '@angular/core';
import { novi_sad } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-novi-sad',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./novi-sad.component.scss']
})
export class NoviSadComponent extends BasePortfolioComponent {
    images = novi_sad;
}
