import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { letters } from 'src/app/constants/letters.constants';
import { Letter } from 'src/app/models/letter.model';
import { FormatService } from 'src/app/core/services/format.service';
import { cloneDeep } from 'lodash';
import { SortService } from 'src/app/core/services/sort.service';
import { Media } from 'src/app/models/media.model';
import { severnMedia, otherMedia } from 'src/app/constants/media.constants';
import { labels } from 'src/app/constants/labels.constants';
import { Section } from 'src/app/models/labels.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResourcesComponent implements OnInit {
  letters: Letter[];
  severnMediaItems: Media[];
  otherMediaItems: Media[];
  sections: Section[];

  constructor(public formatService: FormatService, private sortService: SortService) { }

  ngOnInit() {
    this.sections = labels.sections.resources.subsections;
    this.letters = cloneDeep(letters);
    this.severnMediaItems = cloneDeep(severnMedia);
    this.otherMediaItems = cloneDeep(otherMedia);
    this.sortByDateAscending(this.letters);
    this.sortByDateDescending(this.severnMediaItems);
    this.sortByDateDescending(this.otherMediaItems);
  }

  sortByDateAscending(arr: any) {
    arr.sort(this.sortService.sortByDateAscending);
  }

  sortByDateDescending(arr: any) {
    arr.sort(this.sortService.sortByDateDescending);
  }
}
