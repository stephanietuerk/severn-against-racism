import { FormatService } from 'src/app/core/services/format.service';
import { Action } from 'src/app/models/action.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SvgIconComponent } from 'src/app/core/svg-icon/svg-icon.component';

@Component({
    selector: 'app-recent-action',
    templateUrl: './recent-action.component.html',
    styleUrls: ['./recent-action.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RecentActionComponent implements OnInit {
    @Input() action: Action;

    constructor(public formatService: FormatService) { }

    ngOnInit() {
    }

    toggleItem(icon: SvgIconComponent): void {
        icon.checked = !icon.checked;
    }

}