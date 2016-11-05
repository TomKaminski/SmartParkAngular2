import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-forgot',
  templateUrl: './account-forgot.component.html',
  styleUrls: ['./account-forgot.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountForgotComponent implements OnInit{
  @Output()  moveForgot = new EventEmitter();

  constructor() {}

  ngOnInit() {}

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
