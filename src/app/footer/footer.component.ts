import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public title:string;
  constructor() { }

  ngOnInit() {
this.title = 'Fisical Fitness (Ltd).'
  }

}
