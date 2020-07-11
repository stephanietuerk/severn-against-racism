import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  sortByDateAscending(a, b) {
    return a.date - b.date;
  }

  sortByDateDescending(a, b) {
    return b.date - a.date;
  }
}
