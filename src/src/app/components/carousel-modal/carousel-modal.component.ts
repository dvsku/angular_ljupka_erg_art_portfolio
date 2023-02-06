import { Component, ElementRef, ViewChild } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel-modal',
  templateUrl: './carousel-modal.component.html',
  styleUrls: ['./carousel-modal.component.scss']
})
export class CarouselModalComponent {

    @ViewChild('carouselModal')
    modal: ElementRef;

    faTimes = faTimes;

    image: string;

    constructor(private modalService: NgbModal) {}

    show(image: string) {
        this.image = image;
        this.modalService.open(this.modal, {
            ariaLabelledBy: 'modal-basic-title',
            windowClass: 'modal-dialog-full'
        });
    }
}
