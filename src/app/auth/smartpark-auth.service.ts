import { LocalstorageService } from './../common/localstorage.service';
import { Injectable } from '@angular/core';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt'

@Injectable()
export class SmartparkAuthService implements ISmartparkAuthService {
  jwtHelper: JwtHelper = new JwtHelper();
  constructor(private localStorage: LocalstorageService) { }

  Get(): string {
    return this.localStorage.get();
  }

  Decode(): any {
    var token = this.localStorage.get();
    return this.jwtHelper.decodeToken(token);
  }

  Save(token: string): boolean {
    this.localStorage.save(token);
    return true;
  }

  LoggedIn(): boolean {
    return tokenNotExpired();
  }
}

interface ISmartparkAuthService {
  Get(): string;
  Decode(): any;
  Save(token: string): boolean;
  LoggedIn(): boolean;
}
