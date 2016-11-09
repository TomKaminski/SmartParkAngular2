/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PortalSidebarAccprofileComponent } from './portal-sidebar-accprofile.component';

describe('PortalSidebarAccprofileComponent', () => {
  let component: PortalSidebarAccprofileComponent;
  let fixture: ComponentFixture<PortalSidebarAccprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalSidebarAccprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalSidebarAccprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
