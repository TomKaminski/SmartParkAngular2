import {
  Component,
  OnInit,
  ViewEncapsulation,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('switcherBox', [
      state('login', style({
        marginLeft: '50%',
      })),
      state('register', style({
        marginLeft: '0',
      })),
      state('forgot', style({
        marginLeft: '50%',
      })),
      state('login-mobile', style({
        marginLeft: '0',
      })),
      state('forgot-mobile', style({
        marginLeft: '0',
      })),
      transition('* => *', animate('300ms'))
    ]),
    trigger('innerBox', [
      state('login', style({
        marginLeft: '0',
      })),
      state('register', style({
        marginLeft: '100%',
      })),
      state('forgot', style({
        marginLeft: '-100%',
      })),
      state('login-mobile', style({
        marginLeft: '0',
      })),
      state('forgot-mobile', style({
        marginLeft: '-100%',
      })),
      transition('* => *', animate('300ms'))
    ])
  ]
})
export class AccountComponent implements OnInit {
  private switcherState : string;

  constructor() {
    this.switcherState = window.innerWidth <= 992 ? 'login-mobile' : 'login';
  }

  ngOnInit() {
    window.onresize = onWindowLoadOrResize;
    onWindowLoadOrResize();

    function resizeContainer():void {
      $(".main-container > .row").height($('.register-content > .row').height() + 80);
    }

    function setStatus():void {
      var windowWidth = window.innerWidth;
      if (windowWidth > 992) {
        $('.card-content.switcher-box').css("margin-left", "50%");
      } else if (windowWidth <= 992) {
        $('.card-content.switcher-box').css("margin-left", "0%");
      }
    }

    function onWindowLoadOrResize() {
      resizeContainer();
      setStatus();
    }
  }

  switcherStateChanged(event) {
    this.switcherState = event.value;
  }
}
