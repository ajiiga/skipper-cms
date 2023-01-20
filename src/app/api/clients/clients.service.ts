import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from './dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private readonly httpClient: HttpClient) {}
    get(search: string): Observable<Client[]> {
        return this.httpClient.get<Client[]>(`/clients/?search=${search}`);
    }
}
