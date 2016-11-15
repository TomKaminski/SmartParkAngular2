import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-sidemenu',
  templateUrl: './portal-sidemenu.component.html',
  styleUrls: ['./portal-sidemenu.component.scss']
})
export class PortalSidemenuComponent implements OnInit {

  private sideMenuItems : SideMenuItem[];
  activeRouteName : string;

  constructor() { 
    this.sideMenuItems = [
      new SideMenuItem('home', 'Panel główny', '', false),
      new SideMenuItem('trending_up', 'Statystyki', 'statystyki', false),
      new SideMenuItem('shopping_cart', 'Sklep', 'sklep', false),
      new SideMenuItem('settings', 'Ustawienia', 'ustawienia', false),
      new SideMenuItem('message', 'Wiadomości', 'wiadomosci', false)
    ]
  }

  ngOnInit() {
  }

  portalChildRouteChanged(event) {
    this.activeRouteName = event.value;
    console.log(this.activeRouteName);
  }
}
