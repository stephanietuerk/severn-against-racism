import { ViewChild, ElementRef, Component } from '@angular/core';

@Component({
    selector: 'app-modal',
    template: '<div #modal class="modal"></div>'
})
export class ModalComponent {
    @ViewChild('modal') modal: ElementRef;
    open: boolean;

    setCloseModalOnEsc() {
        document.onkeydown = (evt: KeyboardEvent) => {
            if (evt.key === 'Escape' || evt.key === 'Esc') {
                this.closeModal();
            }
        };
    }

    setCloseModalOnWindowEvent() {
        window.onclick = event => {
            const background = document.querySelector('.modal');
            if (event.target === background) {
                this.closeModal();
            }
        };
    }

    openModal() {
        this.open = true;
        this.setCloseModalOnEsc();
        this.setCloseModalOnWindowEvent();
    }

    closeModal() {
        if (this.modal) {
            this.open = false;
        } else {
            console.error('modal does not exist');
        }
    }
}

