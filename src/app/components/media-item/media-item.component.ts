import { FormatService } from 'src/app/core/services/format.service';
import { Media } from './../../models/media.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {
  @Input() item: Media;

  constructor(public formatService: FormatService) { }

  ngOnInit() {
  }

}
