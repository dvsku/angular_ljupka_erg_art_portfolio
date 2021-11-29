import { Component, OnInit } from '@angular/core';
import { trees } from 'src/app/assets';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss']
})
export class TreesComponent implements OnInit {

    images = trees;

  constructor() { }

  ngOnInit(): void {
  }

}
