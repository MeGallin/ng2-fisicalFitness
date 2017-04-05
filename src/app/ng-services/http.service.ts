import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()

export class HttpService {
private timer;

  constructor(private http: Http) {
    console.log('Data service is working!');
  }
getData() {
    const textUrl = '../../assets/siteContent.json';

    this.timer = Observable.timer(1000, 60000);

    return this.timer
      .retry(3)
      .flatMap(() => this.http.get(textUrl))
      .map(res => res.json());
  }
}
