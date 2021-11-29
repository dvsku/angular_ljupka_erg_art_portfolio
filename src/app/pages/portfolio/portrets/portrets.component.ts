import { Component, OnInit } from '@angular/core';
import { portret } from 'src/app/assets';

@Component({
  selector: 'app-portrets',
  templateUrl: './portrets.component.html',
  styleUrls: ['./portrets.component.scss']
})
export class PortretsComponent implements OnInit {

    images = portret;

  constructor() { }

  ngOnInit(): void {
  }

}
