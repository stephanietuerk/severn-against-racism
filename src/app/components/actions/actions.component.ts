import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { letters } from 'src/app/constants/letters.constants';
import { Letter, Name } from 'src/app/models/letter.model';
import { FormatService } from 'src/app/core/services/format.service';


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
    this.letters = letters;
  }
}
