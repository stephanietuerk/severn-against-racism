import { SortService } from './../../core/services/sort.service';
import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { actions } from 'src/app/constants/actions.constants';
import { cloneDeep } from 'lodash';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    actions: Action[];

    constructor(private sortService: SortService) { }

    ngOnInit() {
        this.actions = cloneDeep(actions);
        this.sortActions();
    }

    sortActions() {
        this.actions.sort(this.sortService.sortByDateDescending);
    }
}
