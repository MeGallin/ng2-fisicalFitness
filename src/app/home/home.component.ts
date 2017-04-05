import { Component, OnInit } from '@angular/core';
import { HttpService } from '../ng-services/http.service';

@Component({
  selector: 'fs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HttpService]
})
export class HomeComponent implements OnInit {

  public homeContent;

  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(
      data => {
        this.homeContent = data.home;
        //console.log(this.homeContent);
      },
      error => alert(error),
      () => console.log('')
    )}
}
