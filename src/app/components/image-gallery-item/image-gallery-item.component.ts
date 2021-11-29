import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'image-gallery-item',
  templateUrl: './image-gallery-item.component.html',
  styleUrls: ['./image-gallery-item.component.scss']
})
export class ImageGalleryItemComponent implements OnInit {
    @Input("source")
    source: string;


  constructor() { }

  ngOnInit(): void {
  }

}
