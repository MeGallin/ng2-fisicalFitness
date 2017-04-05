import { Component, OnInit } from '@angular/core';
import { HttpService } from '../ng-services/http.service';

@Component({
  selector: 'fs-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [HttpService]
})
export class ServicesComponent implements OnInit {
public servicesContent;
constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(
      data => {
        this.servicesContent = data.services;
        //console.log(this.homeContent);
      },
      error => alert(error),
      () => console.log('')
    )}

}
