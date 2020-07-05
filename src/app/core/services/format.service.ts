import { Injectable } from '@angular/core';
import { utcFormat } from 'd3-time-format';
import { Name } from 'src/app/models/letter.model';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor() { }

  date(date: Date): string {
      const formatTime = utcFormat('%B %d, %Y');
      return formatTime(date);
  }

  name(name: Name): string {
    return name.first ? `${name.first} ${name.last}` : name.last;
  }
}
