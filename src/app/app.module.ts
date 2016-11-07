import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountLoginComponent } from './account-login/account-login.component';
import { AccountRegisterComponent } from './account-register/account-register.component';
import { AccountForgotComponent } from './account-forgot/account-forgot.component';
import { LoaderComponent } from './loader/loader.component';

import { SmartparkApiService } from './api/smartpark-api.service'
import { SmartparkAuthService } from './auth/smartpark-auth.service'
import { LocalstorageService } from './common/localstorage.service'

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountForgotComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [LocalstorageService, SmartparkAuthService, SmartparkApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
