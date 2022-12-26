import { Component, OnInit } from '@angular/core';
import { Client } from '../../../../api/clients/dto';
import { ClientsService } from '../../../../api/clients/clients.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
    clients: Client[];
    constructor(private readonly clientsService: ClientsService) {}

    ngOnInit(): void {
        this.clientsService.get().subscribe((clients) => {
            this.clients = clients;
        });
    }
}
