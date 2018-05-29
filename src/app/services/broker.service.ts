import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../extensions/httpservice.extensions';

@Injectable()
export class BrokerService {

  constructor(private http: HttpService) {
  }


  addNozzle(name: string, fuelId: number) {
    return this.http.get(`api/default`)
      .map((res) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'))
  }

}
