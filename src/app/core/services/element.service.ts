import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ElementService {

    constructor() { }

    copyToClipboard(content: string): void {
        const tempInput = document.createElement('input');
        tempInput.style.position = 'absolute'; 
        tempInput.style.left = '-1000px'; 
        tempInput.style.top = '-1000px';
        tempInput.value = content;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
    }

    scroll(id: string) {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth'});
    }

    createAlert(el: HTMLElement, className: string, text: string) {
        const parent = el.parentNode;
        const alertEl = document.createElement('div');
        parent.insertBefore(alertEl, el);
        alertEl.className = className;
        alertEl.innerHTML = text;
        window.setTimeout(this.removeAlert.bind(null, alertEl), 600);
    }

    removeAlert(alertEl: HTMLElement): void {
        alertEl.remove();
    }

}
