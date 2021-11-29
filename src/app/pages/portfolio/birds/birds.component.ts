import { Component, OnInit } from '@angular/core';
import { birds } from 'src/app/assets';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {

    images = birds;

  constructor() { }

  ngOnInit(): void {
  }

}
