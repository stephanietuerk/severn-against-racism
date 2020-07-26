import { FormatService } from 'src/app/core/services/format.service';
import { Action } from 'src/app/models/action.model';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { SvgIconComponent } from 'src/app/core/svg-icon/svg-icon.component';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import { ElementService } from 'src/app/core/services/element.service';

@Component({
    selector: 'app-recent-action',
    templateUrl: './recent-action.component.html',
    styleUrls: ['./recent-action.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RecentActionComponent implements OnInit {
    @Input() action: Action;
    displayItem = '';

    constructor(private http: HttpClient, private elementService: ElementService, public formatService: FormatService) { }

    ngOnInit() {
        this.getDisplayItem();
    }

    toggleItem(icon: SvgIconComponent): void {
        icon.checked = !icon.checked;
    }

    copyLink(el: HTMLElement) {
        const content = `severncommunityagainstracism.com/#${this.action.id}`;
        this.elementService.copyToClipboard(content);
        this.elementService.createAlert(el, 'link-copied-alert', 'link copied');
    }

    getDisplayItem() {
        if (this.action.image.type === 'img' || this.action.image.type === 'pdf') {
            this.displayItem = this.action.image.path;
        } else if (this.action.image.type === 'md') {
            this.http
                .get(this.action.image.path,
                    { responseType: 'text'})
                .subscribe(data => {
                    this.displayItem = marked(data);
                });
        } 
    }

}
