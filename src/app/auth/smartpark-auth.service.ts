import { LocalstorageService } from './../common/localstorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SmartparkAuthService implements ISmartparkAuthService{

  constructor(private localStorage : LocalstorageService) { }

  Get():string{
    return this.localStorage.get();
  }

  Decode():any{

  }

  Save(token : string):boolean{
    this.localStorage.save(token);
    return true;
  }
}

interface ISmartparkAuthService {
  Get(): string;
  Decode(): any;
  Save(token : string): boolean;
}
