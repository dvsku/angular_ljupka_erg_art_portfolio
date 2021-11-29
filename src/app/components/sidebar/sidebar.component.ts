import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookSquare, faInstagram, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    faInstagram = faInstagram;
    faFacebook = faFacebookSquare;


  constructor() { }

  ngOnInit(): void {
  }

  toggleSubmenu(submenu: Element) : void {
    if(submenu.classList.contains("expanded")) {
        (submenu as HTMLElement).style.maxHeight = "0px";
        submenu.classList.remove("expanded");
    }
    else {
        let maxHeight = 0;
        for(var i = 0; i < submenu.children.length; i++) {
            maxHeight += submenu.children[i].children[0].clientHeight;
        }

        (submenu as HTMLElement).style.maxHeight = maxHeight + "px";
        submenu.classList.add("expanded");
    }
  }
}
