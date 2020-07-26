import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/models/labels.model';
import { ElementService } from 'src/app/core/services/element.service';

@Component({
  selector: 'app-section-directory',
  templateUrl: './section-directory.component.html',
  styleUrls: ['./section-directory.component.scss']
})
export class SectionDirectoryComponent implements OnInit {
  @Input() sections: Section[];

  constructor(public elementService: ElementService) { }

  ngOnInit(): void {
  }

}
