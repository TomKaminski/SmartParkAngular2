import { SmartparkApiService } from '../api/smartpark-api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-portal-main',
  templateUrl: './portal-main.component.html',
  styleUrls: ['./styles/dashboard.scss','./styles/portal-main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PortalMainComponent implements OnInit {

  constructor(private apiService: SmartparkApiService) {
    this.apiService.Get(this.apiService.ApiEndpoints.test, null, null)
  }

  ngOnInit() {
  }
}
