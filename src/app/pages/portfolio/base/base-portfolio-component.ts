import { Component, ViewChild } from "@angular/core";
import { MatCarouselComponent } from "@ngbmodule/material-carousel";

@Component({ template: '' })
export class BasePortfolioComponent {
    @ViewChild('carousel')
    carousel: MatCarouselComponent;

    images: string[] = []

    public setCarouselImage(image: string) {
        if(this.images == null || this.images == undefined) return;
        if(this.images.length <= 0) return;

        let index = this.images.indexOf(image);
        this.carousel.slideTo(index);
    }
}