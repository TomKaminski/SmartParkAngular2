import { SmartparkApiService } from './../api/smartpark-api.service';
import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccountLoginComponent {
  @Output() moveLogin = new EventEmitter();
  visibleLoader: boolean;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: SmartparkApiService) {
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
        console.log(body);
      },
      {
        Password: value.password,
        UserName: value.email
      });
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
