import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private titleService: Title,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private translate: TranslateService
    ) {}

    private titleKey: string;

    faBars = faBars;

    toggleMenu(menu: Element) {
        if(menu.classList.contains("collapsed")) {
            menu.classList.remove("collapsed");
        }
        else {
            menu.classList.add("collapsed");
        }
    }

    ngOnInit() {
        const title = this.titleService.getTitle();
        this.router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                map(() => {
                    let child = this.activatedRoute.firstChild;
                    while (child.firstChild) {
                        child = child.firstChild;
                    }
                    if (child.snapshot.data['title']) {
                        this.titleKey = child.snapshot.data['title'];
                        return this.titleKey;
                    }
                    return title;
                })
            )
            .subscribe((ttl: string) => {
                this.translate.get(ttl).subscribe((title) => {
                    this.titleService.setTitle(title);
                });
            });

        this.translate.onLangChange.subscribe(() => {
            const title = this.translate.instant(this.titleKey);
            this.titleService.setTitle(title);
        });
    }
}
