import { SmartparkApiService } from '../api/smartpark-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal-main',
  templateUrl: './portal-main.component.html',
  styleUrls: ['./portal-main.component.scss']
})
export class PortalMainComponent implements OnInit {

  constructor(private apiService: SmartparkApiService) {
    this.apiService.Get(this.apiService.ApiEndpoints.test, null, null)
  }

  ngOnInit() {
  }
}
