import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portal-sidebar',
  templateUrl: './portal-sidebar.component.html',
  styleUrls: ['./portal-sidebar.component.scss']
})
export class PortalSidebarComponent implements OnInit {
  sidebarShrinked: boolean;
  @Output() sidebarShrinkedToggled = new EventEmitter();

  constructor() {
    this.sidebarShrinked = false;
  }

  ngOnInit() {
  }

  sidebarToggleHandle() {
    this.sidebarShrinked = !this.sidebarShrinked;
    this.sidebarShrinkedToggled.emit({
      shrinked: this.sidebarShrinked
    });
  }
}
