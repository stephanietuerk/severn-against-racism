import { Component, OnInit } from '@angular/core';
import { labels } from 'src/app/constants/labels.constants';
import { ElementService } from 'src/app/core/services/element.service';

@Component({
  selector: 'app-nav-panel',
  templateUrl: './nav-panel.component.html',
  styleUrls: ['./nav-panel.component.scss']
})
export class NavPanelComponent implements OnInit {
  sections;

  constructor(public elementService: ElementService) { }

  ngOnInit() {
    this.sections = Object.values(labels.sections);
  }
}
