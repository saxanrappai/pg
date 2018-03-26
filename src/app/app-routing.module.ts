import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeoplesComponent }      from './peoples/peoples.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddPeopleComponent } from './add-people/add-people.component';

const routes: Routes = [
  { path: '', component: PeoplesComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'people-details/:id', component: PeopleDetailsComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'payment-details', component: PaymentDetailsComponent },
  { path: 'add-people', component: AddPeopleComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}