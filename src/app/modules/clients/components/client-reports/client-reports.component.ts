import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Report } from '../../../../api/clients/dto';

@Component({
    selector: 'app-client-reports',
    templateUrl: './client-reports.component.html',
    styleUrls: ['./client-reports.component.scss'],
})
export class ClientReportsComponent implements OnInit {
    constructor(@Inject(MAT_DIALOG_DATA) public data: { reports: Report[] }) {}

    ngOnInit(): void {}
}
