import { Component, OnInit } from '@angular/core';
import { People } from '../people';
const model = new People('hai', 'ss', 'sss', 'dfe', '2018-03-30');
@Component({
	selector: 'app-add-people',
	templateUrl: './add-people.component.html',
	styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

	ngOnInit() {

	}
	onSubmit(): void {
		console.log('new form data', model);
	}
}
