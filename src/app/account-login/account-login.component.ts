import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-account-login',
  templateUrl: './account-login.component.html',
  styleUrls: ['./account-login.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class AccountLoginComponent implements OnInit{
  @Output()  moveLogin = new EventEmitter();

  constructor() {}

  ngOnInit() {}

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
