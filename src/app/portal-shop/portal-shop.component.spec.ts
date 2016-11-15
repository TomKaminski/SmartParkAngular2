/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortalShopComponent } from './portal-shop.component';

describe('PortalShopComponent', () => {
  let component: PortalShopComponent;
  let fixture: ComponentFixture<PortalShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
