import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { letters } from 'src/app/constants/letters.constants';
import { Letter } from 'src/app/models/letter.model';
import { FormatService } from 'src/app/core/services/format.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ActionsComponent implements OnInit {
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
