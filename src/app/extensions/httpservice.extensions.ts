import { Injectable } from "@angular/core";
import { Http, Request, RequestOptions, XHRBackend, RequestOptionsArgs, Response, Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class HttpService extends Http {

  token: string;
  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {

    if (typeof url === 'string') {
      if (!options) {
        options = { headers: new Headers() };
      }
      if (options.headers) options.headers.set('Authorization', 'Bearer ${this.token}');
    }
    else {
      url.headers.set('Authorization', `Bearer ${this.token}`);
    }

    return super.request(url, options).catch(this.catchautherror(this));
  }

  private catchautherror(self: HttpService) {
    return (res: Response) => {

      return Observable.throw(res);
    }
  }
}
