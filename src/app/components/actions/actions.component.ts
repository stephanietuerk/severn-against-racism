import { Component, OnInit } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { actions } from 'src/app/constants/actions.constants';
import { SvgIconComponent } from 'src/app/core/svg-icon/svg-icon.component';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
    actions: Action[];

    constructor() { }

    ngOnInit() {
        this.actions = actions;
    }
}
