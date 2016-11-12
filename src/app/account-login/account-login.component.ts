import { Router } from '@angular/router';
import { ToastHelper } from '../common/toast-helper';
import { SmartparkApiService } from './../api/smartpark-api.service';
import { SmartparkAuthService } from './../auth/smartpark-auth.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent {
  @Output() moveLogin = new EventEmitter();
  visibleLoader: boolean;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: SmartparkApiService, private authService: SmartparkAuthService, private router: Router) {
    this.visibleLoader = false;
    this.loginForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, GlobalValidators.mailFormat])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  submitForm(value: any): void {
    this.visibleLoader = true;
    var result = this.apiService.Post(this.apiService.ApiEndpoints.loginWeb,
      (body) => {
        this.visibleLoader = false;
        if (body.isValid == true) {
          this.authService.Save(body.result.access_token);
          this.router.navigate(['portal']);
        }
      },
      (response) => {
        this.visibleLoader = false;
      }, value);
  }

  moveForgot(): void {
    this.moveLogin.emit({
      value: window.innerWidth <= 992 ? 'forgot-mobile' : 'forgot'
    })
  }

  moveRegister(): void {
    this.moveLogin.emit({
      value: 'register'
    })
  }
}
