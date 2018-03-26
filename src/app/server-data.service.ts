import { Injectable } from '@angular/core';

@Injectable()
export class ServerDataService {

	constructor() {
	}

	private Peoples = [
		{ id: 11, name: 'Mr. Nice' },
		{ id: 12, name: 'Narco' },
		{ id: 13, name: 'Bombasto' },
		{ id: 14, name: 'Celeritas' },
		{ id: 15, name: 'Magneta' }
	];

	getPeoples() {
		return this.Peoples;
	}
	getPerson(id:number){
		return this.Peoples.find(Peoples => Peoples.id === id);
	}
}
