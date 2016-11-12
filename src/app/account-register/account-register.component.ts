import { ToastHelper } from '../common/toast-helper';
import { SmartparkApiService } from './../api/smartpark-api.service';
import { SmartparkAuthService } from './../auth/smartpark-auth.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalValidators } from '../common/global-validators'

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss']
})
export class AccountRegisterComponent {
  @Output()  moveRegister = new EventEmitter();
  registerForm : FormGroup;
  passwordGroup : FormGroup;
  visibleLoader : boolean;;

  constructor(private formBuilder: FormBuilder, private apiService: SmartparkApiService, private authService: SmartparkAuthService) {
    this.visibleLoader = false;
    this.registerForm = formBuilder.group({
      'email' : ['', Validators.compose([Validators.required, GlobalValidators.mailFormat])],
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'repeatpassword' :  ['', Validators.required],
      'name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
    }, { validator: GlobalValidators.matchPassword });
  }

  submitForm(value: any) : void {
    this.visibleLoader = true;
    var result = this.apiService.Post(this.apiService.ApiEndpoints.register,
      (body) => {
        this.visibleLoader = false;
      },
      (response) => {
        this.visibleLoader = false;
      }, value);
  }

  moveLogin() : void{
    this.moveRegister.emit({
      value: window.innerWidth <= 992 ? 'login-mobile' : 'login'
    })
  }
}
