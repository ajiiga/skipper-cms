import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from './dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private readonly httpClient: HttpClient) {}
    get(): Observable<Client[]> {
        return this.httpClient.get<Client[]>('/clients/');
    }
}
