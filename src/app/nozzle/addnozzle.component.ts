import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrokerService } from '../services/broker.service';
import { ApiService } from '../services/api.service';
import { Nozzle } from '../models/nozzle';

@Component({
  selector: 'addnozzle',
  templateUrl: 'addnozzle.component.html'
})

export class NozzleComponent implements OnInit {

  result: Nozzle[] = [];

  constructor(private service: ApiService) {
    //this.hserv.GetHomeMessage().subscribe(response => this.result = response);
  }

  ngOnInit(): void {
    this.getNozzles();
  }

  getNozzles(): any {
    this.service.get("nozzle").subscribe(resp => {
      this.bindNozzles(resp);
    });
  }

  bindNozzles(data: Nozzle[]): void {
    console.log(data);
    this.result = data;
  }

  // saveNozzleDetails() {
  //   this.service.post("http://localhost:53554/nozzle", this.nozzle).subscribe(resp => {
  //     this.result = resp;
  //   });
  // }
}
