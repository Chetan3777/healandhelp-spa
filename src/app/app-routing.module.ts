import { PatientRegistrationComponent } from './patientregistration/patientregistration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'patient-registration/:id', component: PatientRegistrationComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'patientdetails/:id', component:PatientdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
