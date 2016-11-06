import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountLoginComponent{
  @Output()  moveLogin = new EventEmitter();

  loginForm : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      'email' : ['', Validators.compose([Validators.required, GlobalValidators.mailFormat])],
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  submitForm(value: any):void{
    console.log('Reactive Login Form Data: ')
    console.log(value);
  }

  moveForgot() : void{
    this.moveLogin.emit({
      value: window.innerWidth <= 992 ? 'forgot-mobile' : 'forgot'
    })
  }

  moveRegister() : void{
    this.moveLogin.emit({
      value: 'register'
    })
  }
}
