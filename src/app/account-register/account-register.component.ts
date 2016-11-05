import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-register',
  templateUrl: './account-register.component.html',
  styleUrls: ['./account-register.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountRegisterComponent implements OnInit {
  @Output()  moveRegister = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  moveLogin() : void{
    this.moveRegister.emit({
      value: window.innerWidth <= 992 ? 'login-mobile' : 'login'
    })
  }
}
