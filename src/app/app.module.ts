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
    UnauthorizedComponent
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
