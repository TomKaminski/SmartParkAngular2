import { SmartparkAuthService } from './../auth/smartpark-auth.service';
import { SideMenuItem } from './../common/sidemenu-item';
import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-portal-sidemenu',
  templateUrl: './portal-sidemenu.component.html',
  styleUrls: ['./portal-sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortalSidemenuComponent implements OnInit {

  private sideMenuItems: SideMenuItem[];
  activeRouteName: string;
  @Output() sidebarShrinkToggled = new EventEmitter();
  @Input() sidebarShrinked: boolean;

  constructor(private router: Router, private authService: SmartparkAuthService) {
    this.sideMenuItems = [
      new SideMenuItem('home', 'Panel główny', ''),
      new SideMenuItem('trending_up', 'Statystyki', 'statystyki'),
      new SideMenuItem('shopping_cart', 'Sklep', 'sklep'),
      new SideMenuItem('settings', 'Ustawienia', 'ustawienia'),
      new SideMenuItem('message', 'Wiadomości', 'wiadomosci')
    ];

    if (authService.IsAdmin()) {
      this.sideMenuItems.push(
        new SideMenuItem('group', 'Użytkownicy', 'admin/uzytkownicy'),
        new SideMenuItem('credit_card', 'Zamówienia', 'admin/zamowienia'),
        new SideMenuItem('assignment', 'Cennik', 'admin/cennik'),
        new SideMenuItem('swap_vert', 'Wyjazdy', 'admin/wyjazdy'))
    }

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var routeName = event.url.replace('portal', '').replace(/\//ig, '');
        this.activeRouteName = routeName;
      }
    });

  }

  sidebarToggled() {
    this.sidebarShrinkToggled.emit()
  }

  ngOnInit() {
  }
}
