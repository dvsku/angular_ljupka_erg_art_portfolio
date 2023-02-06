import { Component } from '@angular/core';
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    faInstagram = faInstagram;
    faFacebook = faFacebookSquare;

  constructor(public translate: TranslateService, private cookieService: CookieService) { 
    translate.setDefaultLang('en');
    if (this.cookieService.check('language')) {
        translate.use(cookieService.get('language'));
    }
  }

  public changeLanguage(language: string) {
    this.cookieService.set('language', language, undefined, '/', undefined, false, 'Lax');
    this.translate.use(language);
}

  toggleSubmenu(submenu: Element) : void {
    if(submenu.classList.contains("expanded")) {
        (submenu as HTMLElement).style.maxHeight = "0px";
        submenu.classList.remove("expanded");
    }
    else {
        let maxHeight = 0;
        for(var i = 0; i < submenu.children.length; i++) {
            maxHeight += submenu.children[i].children[0].clientHeight;
        }

        (submenu as HTMLElement).style.maxHeight = maxHeight + "px";
        submenu.classList.add("expanded");
    }
  }
}
