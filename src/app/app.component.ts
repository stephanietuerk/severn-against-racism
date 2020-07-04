import { Component, OnInit } from '@angular/core';
import { labels } from './constants/labels.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels;

  ngOnInit() {
    this.labels = labels.sections;
  }

  scroll(element: any) {
    element.scrollIntoView({ behavior: 'smooth'});
  }
}
