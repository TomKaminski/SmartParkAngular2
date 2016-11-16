import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portal-sidebar-accprofile',
  templateUrl: './portal-sidebar-accprofile.component.html',
  styleUrls: ['./portal-sidebar-accprofile.component.scss']
})
export class PortalSidebarAccprofileComponent implements OnInit {
  @Input() sidebarShrinked : boolean;

  constructor() { }

  ngOnInit() {
  }

}
