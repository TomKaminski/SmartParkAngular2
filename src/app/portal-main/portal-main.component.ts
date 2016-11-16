import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portal-main',
  templateUrl: './portal-main.component.html',
  styleUrls: ['./styles/dashboard.scss','./styles/portal-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortalMainComponent implements OnInit {
  sidebarShrinked: boolean;
  constructor() {
  }

  ngOnInit() {
  }

  onSidebarShrinked(event){
    this.sidebarShrinked = event.shrinked;
  }
}
