import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../server-data.service';

@Component({
	selector: 'app-peoples',
	templateUrl: './peoples.component.html',
	styleUrls: ['./peoples.component.css']
})
export class PeoplesComponent implements OnInit {

	constructor(private ServerDataService: ServerDataService) { }
	peoples = [];
	ngOnInit() {
		this.getPeoples();
	}
	getPeoples(): void {
		this.peoples = this.ServerDataService.getPeoples();
	}
}
