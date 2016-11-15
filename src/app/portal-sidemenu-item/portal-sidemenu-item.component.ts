import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-portal-sidemenu-item',
  templateUrl: './portal-sidemenu-item.component.html',
  styleUrls: ['./portal-sidemenu-item.component.scss']
})
export class PortalSidemenuItemComponent implements OnInit {
  @Input() sideMenuItem: SideMenuItem;
  @Input() isActive: boolean;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sideMenuItemClick(event): void {
    event.preventDefault();
    this.clicked.emit({
      value: this.sideMenuItem.routeTargetName
    })
  }
}
