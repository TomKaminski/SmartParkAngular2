import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-forgot',
  templateUrl: './account-forgot.component.html',
  styleUrls: ['./account-forgot.component.scss']
})
export class AccountForgotComponent {
  @Output() moveForgot = new EventEmitter();
  visibleLoader: boolean;

  forgotForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.visibleLoader = false;
    this.forgotForm = formBuilder.group({
      'email': ['', Validators.compose([Validators.required, GlobalValidators.mailFormat])],
    })
  }

  submitForm(value: any): void {
    this.visibleLoader = !this.visibleLoader;
    console.log(this.visibleLoader);
    console.log('Reactive Forgot Form Data: ')
    console.log(value);
  }

  moveLogin(): void {
    if (!this.visibleLoader) {
      this.moveForgot.emit({
        value: window.innerWidth <= 992 ? 'login-mobile' : 'login'
      })
    }
  }

  moveRegister(): void {
    if (!this.visibleLoader) {
      this.moveForgot.emit({
        value: 'register'
      })
    }
  }
}
