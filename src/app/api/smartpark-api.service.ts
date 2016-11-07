import { SmartparkAuthService } from './../auth/smartpark-auth.service';
import { SmartJsonResult } from './smart-json-result';
import { SmartRequest } from './smart-request';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers, Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SmartparkApiService implements ISmartparkApiService {
  apiBaseUrl: string = 'http://localhost:55024/api/';

  constructor(private http: Http, private localStorage: SmartparkAuthService) { }

  Get(apiSmartRequest: SmartRequest, funcThen: Function, funcError: Function, params?: URLSearchParams): Promise<SmartJsonResult> {
    return this.http.get(apiSmartRequest.Url, this.CreateGetRequestOptions(params != null ? params : new URLSearchParams(), apiSmartRequest.MustAuthorize))
      .toPromise()
      .then(x => {
        var body = this.ExtractResponseData(x);
        funcThen(body);
      }).catch((error: Response | any) => {
        funcError();
        this.HandleError(error)
      });
  }

  Post(apiSmartRequest: SmartRequest, funcThen: Function, funcError: Function, data?: any): Promise<SmartJsonResult> {
    return this.http.post(apiSmartRequest.Url, data, this.CreatePostRequestOptions(apiSmartRequest.MustAuthorize, data))
      .toPromise()
      .then(x => {
        var body = this.ExtractResponseData(x);
        funcThen(body);
      })
      .catch((error: Response | any) => {
        funcError();
        this.HandleError(error)
      });
  }

  public ApiEndpoints: any = {
    loginApp: new SmartRequest(this.apiBaseUrl + 'auth/loginapp', false),
    loginWeb: new SmartRequest(this.apiBaseUrl + 'auth/loginweb', false)
  }

  private CreateGetRequestOptions(urlSearchParams: URLSearchParams, useTokenCredentials: boolean): RequestOptions {
    let requestOptions = new RequestOptions({ headers: this.GetBaseHeaders(useTokenCredentials), search: urlSearchParams });
    return requestOptions;
  }

  private CreatePostRequestOptions(useTokenCredentials: boolean, data: any): RequestOptions {
    let requestOptions = new RequestOptions({ headers: this.GetBaseHeaders(useTokenCredentials), body: data });
    return requestOptions;
  }

  private GetBaseHeaders(useTokenCredentials: boolean): Headers {
    return useTokenCredentials
      ? new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.GetJwtToken()}` })
      : new Headers({ 'Content-Type': 'application/json' });
  }

  private GetJwtToken(): string {
    return this.localStorage.Get();
  }

  private ExtractResponseData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private HandleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

interface ISmartparkApiService {
  Get(endPointAddress: SmartRequest, funcThen: Function, funcError: Function): Promise<SmartJsonResult>;
  Post(endPointAddress: SmartRequest, funcThen: Function, funcError: Function): Promise<SmartJsonResult>;
  Get(endPointAddress: SmartRequest, funcThen: Function, funcError: Function, params?: URLSearchParams): Promise<SmartJsonResult>;
  Post(endPointAddress: SmartRequest, funcThen: Function, funcError: Function, params?: URLSearchParams): Promise<SmartJsonResult>;
}
