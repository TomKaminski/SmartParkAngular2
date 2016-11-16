import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portal-sidemenu-item',
  templateUrl: './portal-sidemenu-item.component.html',
  styleUrls: ['./portal-sidemenu-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortalSidemenuItemComponent implements OnInit {
  @Input() sideMenuItem: SideMenuItem;
  @Input() isActive: boolean;
  @Input() sidebarShrinked: boolean;

  constructor() {
  }

  ngOnInit() {
  }
}
