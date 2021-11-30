import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TwoColumnLayoutComponent } from './components/layouts/two-column-layout/two-column-layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { ImageGalleryItemComponent } from './components/image-gallery-item/image-gallery-item.component';
import { BirdsComponent } from './pages/portfolio/birds/birds.component';
import { DollsComponent } from './pages/portfolio/dolls/dolls.component';
import { FlowersComponent } from './pages/portfolio/flowers/flowers.component';
import { LandscapeComponent } from './pages/portfolio/landscape/landscape.component';
import { MuralsComponent } from './pages/portfolio/murals/murals.component';
import { NoviSadComponent } from './pages/portfolio/novi-sad/novi-sad.component';
import { PortretsComponent } from './pages/portfolio/portrets/portrets.component';
import { TreesComponent } from './pages/portfolio/trees/trees.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ReviewFirstComponent } from './pages/reviews/review-first/review-first.component';
import { ReviewSecondComponent } from './pages/reviews/review-second/review-second.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModalComponent } from './components/carousel-modal/carousel-modal.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwoColumnLayoutComponent,
    SidebarComponent,
    GalleryComponent,
    ImageGalleryComponent,
    ImageGalleryItemComponent,
    BirdsComponent,
    DollsComponent,
    FlowersComponent,
    LandscapeComponent,
    MuralsComponent,
    NoviSadComponent,
    PortretsComponent,
    TreesComponent,
    AboutMeComponent,
    ReviewFirstComponent,
    ReviewSecondComponent,
    CarouselModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    MatCarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
