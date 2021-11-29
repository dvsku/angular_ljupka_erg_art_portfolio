import { Component, OnInit } from '@angular/core';
import { mural } from 'src/app/assets';

@Component({
  selector: 'app-murals',
  templateUrl: './murals.component.html',
  styleUrls: ['./murals.component.scss']
})
export class MuralsComponent implements OnInit {

    images = mural;

  constructor() { }

  ngOnInit(): void {
  }

}
