import { Component, OnInit } from '@angular/core';
import { labels } from './constants/labels.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sections;

  ngOnInit() {
    this.sections = labels.sections;
  }
}
