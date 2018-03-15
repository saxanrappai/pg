import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';


@NgModule({
  declarations: [
    AppComponent,
    PeoplesComponent,
    PeopleDetailsComponent,
    PaymentsComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
