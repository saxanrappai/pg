import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServerDataService } from '../server-data.service';
@Component({
	selector: 'app-people-details',
	templateUrl: './people-details.component.html',
	styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private ServerDataService: ServerDataService
	) { }

	ngOnInit(): void {
		this.getHero();
	}
	title: number;
	peoples;

	getHero(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.peoples = this.ServerDataService.getPerson(id);
		this.title = id;
	}
}
