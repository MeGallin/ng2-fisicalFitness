import {Observable} from 'rxjs/Rx';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'fs-bottom-footer',
  templateUrl: './bottom-footer.component.html',
  styleUrls: ['./bottom-footer.component.css']
})
export class BottomFooterComponent implements OnInit {
  public time;

  constructor() {
    this.time = Observable.interval(1000).map(t => new Date());
  }

  ngOnInit() {

  }

}
