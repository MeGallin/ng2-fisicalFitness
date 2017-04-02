import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fs-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.css']
})
export class BottomFooterComponent implements OnInit {
public title:string;
  constructor() { }

  ngOnInit() {
    this.title = 'Bottom Footer'
  }

}
