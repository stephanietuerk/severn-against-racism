import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { letters } from 'src/app/constants/letters.constants';
import { Letter } from 'src/app/models/letter.model';
import { FormatService } from 'src/app/core/services/format.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResourcesComponent implements OnInit {
  letters: Letter[];

  constructor(public formatService: FormatService) { }

  ngOnInit() {
    this.letters = cloneDeep(letters);
    this.sortLetters();
  }

  sortLetters() {
    this.letters.sort(this.sortByDateAscending);
  }

  sortByDateAscending(a, b) {
    return a.date - b.date;
  }
}