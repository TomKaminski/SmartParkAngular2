import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-sidemenu',
  templateUrl: './portal-sidemenu.component.html',
  styleUrls: ['./portal-sidemenu.component.scss']
})
export class PortalSidemenuComponent implements OnInit {

  private sideMenuItems : SideMenuItem[];

  constructor() { 
    this.sideMenuItems = [
      new SideMenuItem('home', 'Panel główny', 'home', false),
      new SideMenuItem('trending_up', 'Statystyki', 'stats', false),
      new SideMenuItem('shopping_cart', 'Sklep', 'shop', false),
      new SideMenuItem('settings', 'Ustawienia', 'settings', false),
      new SideMenuItem('message', 'Wiadomości', 'message', false)
    ]
  }

  ngOnInit() {
  }

}
