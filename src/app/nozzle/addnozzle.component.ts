import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrokerService } from '../services/broker.service';

@Component({
  selector: 'addnozzle',
  templateUrl: 'addnozzle.component.html'
})

export class NozzleComponent implements OnInit {

  result: any[] = [];
  nozzleResp: any;

  nozzle: {
    nozzleName: string,
    fuelId: number,
    currentReading: number
  }  

  constructor(private service: BrokerService) {
    this.nozzle =  {
      nozzleName: '',
        currentReading: 0,
        fuelId: 0
    } 
    //this.hserv.GetHomeMessage().subscribe(response => this.result = response);
  }

  ngOnInit(): void {
  }

  saveNozzleDetails() {

    this.service.addNozzle(this.nozzle).subscribe(resp => {

      this.nozzleResp = resp;
    });
  }
}
