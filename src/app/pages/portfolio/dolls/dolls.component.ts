import { Component, OnInit } from '@angular/core';
import { dolls } from 'src/app/assets';

@Component({
  selector: 'app-dolls',
  templateUrl: './dolls.component.html',
  styleUrls: ['./dolls.component.scss']
})
export class DollsComponent implements OnInit {

    images = dolls;

  constructor() { }

  ngOnInit(): void {
  }

}
