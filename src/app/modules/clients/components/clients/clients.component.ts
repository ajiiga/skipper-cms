import { Component, HostListener, OnInit } from '@angular/core';
import { Client } from '../../../../api/clients/dto';
import { ClientsService } from '../../../../api/clients/clients.service';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ClientReportsComponent } from '../client-reports/client-reports.component';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    page: number = 1;
    countClients: number = 0;
    searchControl = new FormControl<string>('');
    constructor(private readonly clientsService: ClientsService, private dialog: MatDialog) {}

    ngOnInit(): void {
        this.search();
    }

    search(): void {
        this.clientsService.search(this.searchControl.value, this.page).subscribe((result) => {
            this.clients = result.clients;
            this.countClients = result.clients_count;
        });
    }

    handlePageEvent(event: PageEvent) {
        this.page = event.pageIndex + 1;
        this.search();
    }

    openReports(client: Client): void {
        this.dialog.open(ClientReportsComponent, { width: '1200px', data: { reports: client.Reports } });
    }

    @HostListener('window:keyup.enter', ['$event', 'undefined'])
    @HostListener('window:click', ['undefined', '$event'])
    onEnterOrClick(enterEvent, mouseEvent) {
        if (enterEvent) {
            this.search();
        }
    }
}
