import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-review-second',
  templateUrl: './review-second.component.html',
  styleUrls: ['./review-second.component.scss']
})
export class ReviewSecondComponent {

  constructor(public translate: TranslateService) { }

}
