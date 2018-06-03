import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../extensions/httpservice.extensions';

@Injectable()
export class BrokerService {

  constructor(private http: HttpService) {
  }


  addNozzle(nozzle: any) {
    return this.http.post("http://localhost:53554/nozzle", nozzle)
      .map((res) => res.json())
      //.catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
