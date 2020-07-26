import { SortService } from './../../core/services/sort.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Action } from 'src/app/models/action.model';
import { actions } from 'src/app/constants/actions.constants';
import { cloneDeep } from 'lodash';
import { labels } from 'src/app/constants/labels.constants';
import { Section } from 'src/app/models/labels.model';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import { SvgIconComponent } from 'src/app/core/svg-icon/svg-icon.component';
import { ElementService } from 'src/app/core/services/element.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ActionsComponent implements OnInit {
    actions: Action[];
    sections: Section[]
    letterTemplate: string;
    letterTemplatePath: string = 'assets/letters/md/scsar004.md';
    
    constructor(private http: HttpClient, private sortService: SortService, public elementService: ElementService) { }

    ngOnInit() {
        this.getLetterTemplate();
        this.sections = labels.sections.actions.subsections;
        this.actions = cloneDeep(actions);
        this.sortActions();
    }

    sortActions() {
        this.actions.sort(this.sortService.sortByDateDescending);
    }

    getLetterTemplate() {
        this.http
            .get(this.letterTemplatePath,
                { responseType: 'text'})
            .subscribe(data => {
                this.letterTemplate = marked(data);
            });
    }

    toggleItem(icon: SvgIconComponent): void {
        icon.checked = !icon.checked;
    }
}
