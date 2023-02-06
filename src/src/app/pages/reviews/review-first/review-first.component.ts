import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-review-first',
  templateUrl: './review-first.component.html',
  styleUrls: ['./review-first.component.scss']
})
export class ReviewFirstComponent {

  constructor(public translate: TranslateService) { }

}
