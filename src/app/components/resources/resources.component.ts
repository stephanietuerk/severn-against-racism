import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { letters } from 'src/app/constants/letters.constants';
import { Letter } from 'src/app/models/letter.model';
import { FormatService } from 'src/app/core/services/format.service';
import { cloneDeep } from 'lodash';
import { SortService } from 'src/app/core/services/sort.service';
import { Media } from 'src/app/models/media.model';
import { severnMedia, otherMedia } from 'src/app/constants/media.constants';

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

  constructor(public formatService: FormatService, private sortService: SortService) { }

  ngOnInit() {
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
