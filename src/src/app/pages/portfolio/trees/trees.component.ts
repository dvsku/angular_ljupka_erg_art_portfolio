import { Component } from '@angular/core';
import { trees } from 'src/app/assets';
import { BasePortfolioComponent } from '../base/base-portfolio-component';

@Component({
  selector: 'app-trees',
  templateUrl: '../base/base-portfolio-template.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent extends BasePortfolioComponent {
    images = trees;
}
