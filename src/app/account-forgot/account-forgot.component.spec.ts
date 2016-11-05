/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountForgotComponent } from './account-forgot.component';

describe('AccountForgotComponent', () => {
  let component: AccountForgotComponent;
  let fixture: ComponentFixture<AccountForgotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountForgotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
