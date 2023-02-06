import { Component, Input, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'image-gallery-item',
  templateUrl: './image-gallery-item.component.html',
  styleUrls: ['./image-gallery-item.component.scss']
})
export class ImageGalleryItemComponent {
    @Input("source")
    source: string;

    @Input("description")
    description: string;

    constructor(private renderer: Renderer2, public translate: TranslateService, private cookieService: CookieService) { 
        translate.setDefaultLang('en');
        if (this.cookieService.check('language')) {
            translate.use(cookieService.get('language'));
        }
    }

    public onIntersection(visible: boolean, target: any): void {
        if (visible && !target.classList.contains("visible")) {
            this.renderer.addClass(target, "visible");
        }
        else if (target.classList.contains("visible")) {
            this.renderer.removeClass(target, "visible");
        }
    }
}
