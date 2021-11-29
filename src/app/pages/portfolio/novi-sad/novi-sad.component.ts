import { Component, OnInit } from '@angular/core';
import { novi_sad } from 'src/app/assets';

@Component({
  selector: 'app-novi-sad',
  templateUrl: './novi-sad.component.html',
  styleUrls: ['./novi-sad.component.scss']
})
export class NoviSadComponent implements OnInit {

    images = novi_sad;

  constructor() { }

  ngOnInit(): void {
  }

}
