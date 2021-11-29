import { Component, OnInit } from '@angular/core';
import { birds, dolls, flowers, landscape, mural, novi_sad, portret, trees } from 'src/app/assets';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
    images = [].concat.apply([], [birds, dolls, flowers, landscape, mural, novi_sad, portret, trees]);

    public setCarouselImage() {
        let index = this.images.indexOf()
    }

  constructor() { }

  ngOnInit(): void {
  }

}
