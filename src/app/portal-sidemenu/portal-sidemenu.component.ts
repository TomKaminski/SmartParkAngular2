import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-portal-sidemenu',
  templateUrl: './portal-sidemenu.component.html',
  styleUrls: ['./portal-sidemenu.component.scss']
})
export class PortalSidemenuComponent implements OnInit {

  private sideMenuItems: SideMenuItem[];
  activeRouteName: string;

  constructor(private router: Router) {
    this.sideMenuItems = [
      new SideMenuItem('home', 'Panel główny', '', false),
      new SideMenuItem('trending_up', 'Statystyki', 'statystyki', false),
      new SideMenuItem('shopping_cart', 'Sklep', 'sklep', false),
      new SideMenuItem('settings', 'Ustawienia', 'ustawienia', false),
      new SideMenuItem('message', 'Wiadomości', 'wiadomosci', false)
    ];

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var routeName = event.url.replace('portal', '').replace(/\//ig, '');
        this.activeRouteName = routeName;
      }
    });
  }

  ngOnInit() {
  }
}
