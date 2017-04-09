import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
private content;
textUrl: string;

  constructor(private http: Http) {
    console.log('Data service is working!');
     this.textUrl = '../../assets/siteContent.json';
  }
getData(): Observable<any> {
   return this.http.get(this.textUrl).map(res => res.json());
  }
}
