import { ModalComponent } from './../modal.component';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Letter } from 'src/app/models/letter.model';
import { HttpClient } from '@angular/common/http';
import { FormatService } from 'src/app/core/services/format.service';
import * as marked from 'marked';

@Component({
    selector: 'app-media-modal',
    templateUrl: './media-modal.component.html',
    styleUrls: ['./media-modal.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class MediaModalComponent extends ModalComponent implements OnInit {
    @Input() mediaItem: Letter;
    resourceHtml = '';

    constructor(private http: HttpClient, public formatService: FormatService) {
      super();
    }

    ngOnInit() {
    }

    openModal() {
        this.getResourceHtml();
        super.openModal();
    }

    closeModal() {
        super.closeModal();
    }

    getResourceHtml() {
        if (this.mediaItem.content.type === 'html') {
            this.http
                .get('assets/letters/' + this.mediaItem.content.location,
                    { responseType: 'text'})
                .subscribe(data => {
                    this.resourceHtml = data;
                });
        } else {
            this.http
                .get('assets/letters/' + this.mediaItem.content.location,
                    { responseType: 'text'})
                .subscribe(data => {
                    this.resourceHtml = marked(data);
                });
        }
    }
}
