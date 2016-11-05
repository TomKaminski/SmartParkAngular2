import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountRegisterComponent {
  @Output()  moveRegister = new EventEmitter();
  registerForm : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      'email' : '',
      'password' : '',
      'repeatPassword' : '',
      'name':'',
      'lastName':''
    })
  }

  submitForm(value: any):void{
    console.log('Reactive register Form Data: ')
    console.log(value);
  }

  moveLogin() : void{
    this.moveRegister.emit({
      value: window.innerWidth <= 992 ? 'login-mobile' : 'login'
    })
  }
}
