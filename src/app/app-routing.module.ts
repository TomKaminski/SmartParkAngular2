import { ReversedAuthGuard } from './auth/reversed-auth-guard.service';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortalMainComponent } from './portal-main/portal-main.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: 'portal',
                component: PortalMainComponent,
                data: {
                    title: 'SmartPark - Portal'
                },
                canActivate: [AuthGuard]
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
        AuthGuard, ReversedAuthGuard
    ]
})
export class AppRoutingModule { }
