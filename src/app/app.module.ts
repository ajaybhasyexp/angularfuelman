import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.router';
import { HttpModule } from '@angular/http'

import { NozzleComponent } from "./nozzle/addnozzle.component";
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { BrokerService } from './services/broker.service';
import { HttpService } from './extensions/httpservice.extensions';
import { Http, Request, RequestOptions, XHRBackend, RequestOptionsArgs, Response, Headers } from "@angular/http";



@NgModule({
  declarations: [
    NavMenuComponent,
    AppComponent,
    NozzleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [
    {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options)
      },
      deps: [XHRBackend, RequestOptions]
    },
    BrokerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
