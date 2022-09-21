import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PatientRegistrationComponent } from './patientregistration/patientregistration.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import * as $ from "jquery";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    PatientRegistrationComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBTOW4lXGE8oTv7Q_NeGEG68DQoQQq81Xo',
      libraries: ['geometry', 'places', 'visualization', 'drawing']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
