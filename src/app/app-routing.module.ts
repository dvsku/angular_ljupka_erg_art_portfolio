import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { BirdsComponent } from './pages/portfolio/birds/birds.component';
import { DollsComponent } from './pages/portfolio/dolls/dolls.component';
import { FlowersComponent } from './pages/portfolio/flowers/flowers.component';
import { LandscapeComponent } from './pages/portfolio/landscape/landscape.component';
import { MuralsComponent } from './pages/portfolio/murals/murals.component';
import { NoviSadComponent } from './pages/portfolio/novi-sad/novi-sad.component';
import { PortretsComponent } from './pages/portfolio/portrets/portrets.component';
import { TreesComponent } from './pages/portfolio/trees/trees.component';
import { ReviewFirstComponent } from './pages/reviews/review-first/review-first.component';
import { ReviewSecondComponent } from './pages/reviews/review-second/review-second.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'gallery',
        component: GalleryComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'about',
        component: AboutMeComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'reviews/imaginary-sceneries',
        component: ReviewFirstComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'reviews/vibrant-life',
        component: ReviewSecondComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/dolls',
        component: DollsComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/flowers',
        component: FlowersComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/landscape',
        component: LandscapeComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/murals',
        component: MuralsComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/novi-sad',
        component: NoviSadComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/portrets',
        component: PortretsComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
    {
        path: 'portfolio/trees',
        component: TreesComponent,
        data: { title: 'TITLES.HOME', reuseRoute: true }
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
