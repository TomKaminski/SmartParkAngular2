import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-account-forgot',
  templateUrl: './account-forgot.component.html',
  styleUrls: ['./account-forgot.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountForgotComponent{
  @Output() moveForgot = new EventEmitter();
  forgotForm : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.forgotForm = formBuilder.group({
      'email' : ''
    })
  }

  submitForm(value: any):void{
    console.log('Reactive Forgot Form Data: ')
    console.log(value);
  }

  moveLogin() : void{
    this.moveForgot.emit({
      value: window.innerWidth <= 992 ? 'login-mobile' : 'login'
    })
  }

  moveRegister() : void{
    this.moveForgot.emit({
      value: 'register'
    })
  }
}
