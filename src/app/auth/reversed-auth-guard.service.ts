import { SmartparkAuthService } from './smartpark-auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class ReversedAuthGuard implements CanActivate {

    constructor(private auth: SmartparkAuthService, private router: Router) { }

    canActivate() {
        if (this.auth.LoggedIn()) {
            this.router.navigate(['portal']);
            return false;
        } else {
            return true;
        }
    }
}