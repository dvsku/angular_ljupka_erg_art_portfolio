import { Component, ViewChild } from "@angular/core";
import { MatCarouselComponent } from "@ngbmodule/material-carousel";
import { Image } from "src/app/models/Image";

@Component({ template: '' })
export class BasePortfolioComponent {
    @ViewChild('carousel')
    carousel: MatCarouselComponent;

    images: Image[] = []

    public setCarouselImage(image: Image) {
        if(this.images == null || this.images == undefined) return;
        if(this.images.length <= 0) return;

        let index = this.images.indexOf(image);
        this.carousel.slideTo(index);
    }
}