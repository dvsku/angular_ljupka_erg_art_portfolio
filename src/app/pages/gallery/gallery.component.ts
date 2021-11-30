import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatCarouselComponent } from '@ngbmodule/material-carousel';
import { birds, dolls, flowers, landscape, mural, novi_sad, portret, trees } from 'src/app/assets';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
    @ViewChild('carousel')
    carousel: MatCarouselComponent;

    images = [].concat.apply([], [birds, dolls, flowers, landscape, mural, novi_sad, portret, trees]);

    public setCarouselImage(image: string) {
        let index = this.images.indexOf(image);
        this.carousel.slideTo(index);
    }
}
