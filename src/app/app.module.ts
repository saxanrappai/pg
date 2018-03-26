import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { AppRoutingModule } from './/app-routing.module';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PaymentsComponent } from './payments/payments.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { AddPeopleComponent } from './add-people/add-people.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ServerDataService } from './server-data.service';
import { FormsModule } from '@angular/forms';


@NgModule({
	declarations: [
		AppComponent,
		PeoplesComponent,
		PeopleDetailsComponent,
		PaymentsComponent,
		PaymentDetailsComponent,
		AddPeopleComponent,
		NavigationComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AlertModule.forRoot(),
		FormsModule,
	],
	providers: [ServerDataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
