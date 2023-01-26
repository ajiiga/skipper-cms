import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientRegistry } from './dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ClientsService {
    constructor(private readonly httpClient: HttpClient) {}
    search(search: string, page: number): Observable<ClientRegistry> {
        return this.httpClient.get<ClientRegistry>(`/clients/?search=${search}&page=${page}&limit=10`);
    }
}
