import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrokerService } from '../services/broker.service';
import { ApiService } from '../services/api.service';
import { Nozzle } from '../models/nozzle';
import { Constants } from '../constants';

@Component({
  selector: 'addnozzle',
  templateUrl: 'addnozzle.component.html'
})

export class NozzleComponent implements OnInit {

  nozzles: Array<INozzle> = new Array<INozzle>();
  nozzle = new Nozzle();
  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.getNozzles();
  }

  getNozzles(): any {
    this.service.get(Constants.getNozzle).subscribe(resp => {
      this.bindNozzles(resp.result);
    });
  }

  bindNozzles(data: Array<Nozzle>): void {
    this.nozzles = data;
  }

  saveNozzleDetails() {
    this.service.post(Constants.addNozzle, this.nozzle).subscribe(resp => {
      this.getNozzles();
    });
  }
}
