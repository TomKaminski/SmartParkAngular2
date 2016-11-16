import { SmartparkAuthService } from './smartpark-auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable()
export class AdminAuthGuard implements CanActivate {

    constructor(private auth: SmartparkAuthService, private router: Router) { }

    canActivate() {
        if (this.auth.IsAdmin()) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}