import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {

  localStorageKey: string = 'smartParkAppJwtToken';

  constructor() { }

  save(data : string) {
    localStorage.setItem(this.localStorageKey, data)
  }

  get(): string | null {
    return localStorage.getItem(this.localStorageKey);
  }
}
