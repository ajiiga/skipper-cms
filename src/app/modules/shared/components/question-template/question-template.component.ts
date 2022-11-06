import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface QuestionData {
    text: string;
    action: () => any;
}

@Component({
    templateUrl: './question-template.component.html',
    styleUrls: ['./question-template.component.scss'],
})
export class QuestionTemplateComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public data: QuestionData, private readonly dialog: MatDialog) {}

    click() {
        this.data.action();
        this.close();
    }

    close() {
        this.dialog.closeAll();
    }
}
