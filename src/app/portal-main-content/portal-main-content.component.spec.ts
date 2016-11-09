/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortalMainContentComponent } from './portal-main-content.component';

describe('PortalMainContentComponent', () => {
  let component: PortalMainContentComponent;
  let fixture: ComponentFixture<PortalMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
