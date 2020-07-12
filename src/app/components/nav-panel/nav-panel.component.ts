import { Component, OnInit } from '@angular/core';
import { labels } from 'src/app/constants/labels.constants';
import { ViewportScroller } from '@angular/common';
import { Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {
  sections;

  constructor() { }

  ngOnInit() {
    this.sections = labels.sections;
  }

  scroll(id: string) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth'});
  }

}
