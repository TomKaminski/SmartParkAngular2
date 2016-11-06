import { Component, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountRegisterComponent {
  @Output()  moveRegister = new EventEmitter();
  registerForm : FormGroup;
  passwordGroup : FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      'email' : ['', Validators.compose([Validators.required, GlobalValidators.mailFormat])],
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm' :  ['', Validators.required],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    }, { validator: GlobalValidators.matchPassword });
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
