import { Component, OnInit } from '@angular/core';
import { flowers } from 'src/app/assets';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.scss']
})
export class FlowersComponent implements OnInit {

    images = flowers;

  constructor() { }

  ngOnInit(): void {
  }

}
