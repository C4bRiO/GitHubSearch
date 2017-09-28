import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
	private username:string;
	private client_id = ''; //insert your github api client id here
	private client_secret=''; // insert your github api client_Secret here

	constructor(private _http: Http){
		console.log('Github Service Ready');
		//this.username='bradtraversy';
	}


	/*
	getUser()
	// retorna una peticion en formato de json, usando un servicio injectado (el Http) que se caracteriza por tener el _ ex: _http <- servicio injectado 


	*/
	getUser(){
		return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret) 
		.map(res => res.json());
	}

	getRepos(){
		return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret) 
		.map(res => res.json());
	}

	updateUser(username:string){
		this.username= username;
	}

} 