import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../api/clients/dto';
import { ClientsService } from '../../../../api/clients/clients.service';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    searchControl = new FormControl<string>('');
    constructor(private readonly clientsService: ClientsService) {}

    ngOnInit(): void {
        this.search();
    }

    search(): void {
        this.clientsService.get(this.searchControl.value).subscribe((clients) => {
            this.clients = clients;
        });
    }

    handlePageEvent(event: PageEvent) {
        console.log(event);
    }
}
