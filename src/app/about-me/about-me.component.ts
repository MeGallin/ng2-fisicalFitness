import { Component, OnInit } from '@angular/core';
import { HttpService } from '../ng-services/http.service';

@Component({
  selector: 'fs-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [HttpService]
})
export class AboutMeComponent implements OnInit {
public aboutMeContent;
  constructor(private service: HttpService) {
  }

  ngOnInit() {
    this.service.getData().subscribe(
      data => {
        this.aboutMeContent = data.about;
        //console.log(this.homeContent);
      },
      error => alert(error),
      () => console.log('')
    )}

}
