import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
    selector: 'uipack-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Input() content: any;
    @Input() disabled: boolean;
    @Input() type: string = 'button';

    constructor(protected el: ElementRef) {
    }

    ngOnInit() {
        this.setContent(this.content);
        this.changeDisabled(this.disabled);
    }

    public setContent(content?: string): void {
        content = content || this.content;
        this.el.nativeElement.querySelector('button').innerHTML = content;
    }

    public changeDisabled(disabled?: boolean): void {
        disabled = disabled || false;
        this.disabled = disabled;
    }
}
