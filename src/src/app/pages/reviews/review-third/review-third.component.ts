import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-review-third',
  templateUrl: './review-third.component.html',
  styleUrls: ['./review-third.component.scss']
})
export class ReviewThirdComponent {

  constructor(public translate: TranslateService) { }

}
