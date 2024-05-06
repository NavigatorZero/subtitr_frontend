import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HttpClientModule } from "@angular/common/http";
import { VideoHttpService } from "../services/video.http.service";
import { HttpService } from "../services/http.service";
import { AlertModule } from "ngx-bootstrap/alert";
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
  ],
  providers: [
    HttpService,
    VideoHttpService
  ],
  bootstrap: [AuthComponent]
})
export class AppModule { }
