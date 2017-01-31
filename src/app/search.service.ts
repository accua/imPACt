import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  data: Observable<any[]>;
  apiKey = "ad4ec64891c87fb4e5410a42ef340816"

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body.records || { };
  }

  getResults(selection) {
    console.log(selection);
    let searchParam: string = null;
    searchParam = selection;
    let url: string = "http://api.followthemoney.org/?s=" + searchParam + "&y=2016&c-exi=1&gro=c-t-id&APIKey=" + this.apiKey + "&mode=json";
    console.log(searchParam);
    console.log(url);
    this.http.get(url).map(this.extractData).subscribe(i => this.data = i);
  }
}