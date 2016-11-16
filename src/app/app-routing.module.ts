import { AdminAuthGuard } from './auth/admin-auth-guard.service';
import { ReversedAuthGuard } from './auth/reversed-auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalMainComponent } from './portal-main/portal-main.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth/auth-guard.service';

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
    imports: [
        RouterModule.forRoot([
            {
                path: 'portal',
                component: PortalMainComponent,
                data: {
                    title: 'SmartPark - Portal'
                },
                canActivate: [AuthGuard],
                children: [
                    { path: '', component: PortalDashboardComponent },
                    { path: 'statystyki', component: PortalStatisticsComponent },
                    { path: 'sklep', component: PortalShopComponent },
                    { path: 'ustawienia', component: PortalSettingsComponent },
                    { path: 'wiadomosci', component: PortalMessagesComponent },

                    { path: 'admin/uzytkownicy', component: PortalAdminUsersComponent, canActivate: [AdminAuthGuard] },
                    { path: 'admin/zamowienia', component: PortalAdminOrdersComponent, canActivate: [AdminAuthGuard] },
                    { path: 'admin/cennik', component: PortalAdminPricesComponent, canActivate: [AdminAuthGuard] },
                    { path: 'admin/wyjazdy', component: PortalAdminGateusagesComponent, canActivate: [AdminAuthGuard] }
                ]
            },
            {
                path: 'unauthorized', component: UnauthorizedComponent,
                data: {
                    title: 'SmartPark - brak uprawnień'
                }
            },
            {
                path: '', component: AccountComponent,
                data: {
                    title: 'SmartPark - Zaczynamy!'
                },
                canActivate: [ReversedAuthGuard]
            },
            {
                path: '**', component: PageNotFoundComponent,
                data: {
                    title: 'SmartPark - Strona nie znaleziona'
                }
            },

        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthGuard, ReversedAuthGuard, AdminAuthGuard
    ]
})
export class AppRoutingModule { }
