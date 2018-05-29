import { Component, OnInit } from '@angular/core';
import { BrokerService } from '../services/broker.service';

@Component({
  selector: 'addnozzle',
  templateUrl: 'addnozzle.component.html'
})

export class NozzleComponent implements OnInit {

  result: any[] = [];
  nozzleResp: any;

  constructor(private service: BrokerService) {
    //this.hserv.GetHomeMessage().subscribe(response => this.result = response);
  }

  ngOnInit(): void {
  }

  addNozzle() {

    this.service.addNozzle("", 0).subscribe(resp => {

      this.nozzleResp = resp;
    });
  }

}
