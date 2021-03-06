import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountForgotComponent } from './account-forgot/account-forgot.component';
import { LoaderComponent } from './loader/loader.component';

import { SmartparkApiService } from './api/smartpark-api.service'
import { SmartparkAuthService } from './auth/smartpark-auth.service'
import { LocalstorageService } from './common/localstorage.service';
import { PortalMainComponent } from './portal-main/portal-main.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { provideAuth } from 'angular2-jwt';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { PortalHeaderComponent } from './portal-header/portal-header.component';
import { PortalInnerHeaderComponent } from './portal-inner-header/portal-inner-header.component';
import { PortalSidebarComponent } from './portal-sidebar/portal-sidebar.component';
import { PortalSidebarAccprofileComponent } from './portal-sidebar-accprofile/portal-sidebar-accprofile.component';
import { PortalSidemenuComponent } from './portal-sidemenu/portal-sidemenu.component';
import { PortalSidemenuItemComponent } from './portal-sidemenu-item/portal-sidemenu-item.component';
import { PortalMainContentComponent } from './portal-main-content/portal-main-content.component';
import { PortalFooterComponent } from './portal-footer/portal-footer.component';
import { PortalDashboardComponent } from './portal-dashboard/portal-dashboard.component';
import { PortalStatisticsComponent } from './portal-statistics/portal-statistics.component';
import { PortalShopComponent } from './portal-shop/portal-shop.component';
import { PortalSettingsComponent } from './portal-settings/portal-settings.component';
import { PortalMessagesComponent } from './portal-messages/portal-messages.component';
import { PortalAdminUsersComponent } from './portal-admin-users/portal-admin-users.component';
import { PortalAdminOrdersComponent } from './portal-admin-orders/portal-admin-orders.component';
import { PortalAdminPricesComponent } from './portal-admin-prices/portal-admin-prices.component';
import { PortalAdminGateusagesComponent } from './portal-admin-gateusages/portal-admin-gateusages.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountForgotComponent,
    LoaderComponent,
    PortalMainComponent,
    PageNotFoundComponent,
    UnauthorizedComponent,
    PortalHeaderComponent,
    PortalInnerHeaderComponent,
    PortalSidebarComponent,
    PortalSidebarAccprofileComponent,
    PortalSidemenuComponent,
    PortalSidemenuItemComponent,
    PortalMainContentComponent,
    PortalFooterComponent,
    PortalDashboardComponent,
    PortalStatisticsComponent,
    PortalShopComponent,
    PortalSettingsComponent,
    PortalMessagesComponent,
    PortalAdminUsersComponent,
    PortalAdminOrdersComponent,
    PortalAdminPricesComponent,
    PortalAdminGateusagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [LocalstorageService, SmartparkAuthService, SmartparkApiService, provideAuth({
    globalHeaders: [{ 'Content-Type': 'application/json' }]
  })],
  bootstrap: [AppComponent]
})
export class AppModule { }
