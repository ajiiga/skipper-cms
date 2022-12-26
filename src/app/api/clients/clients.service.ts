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
        return of([
            {
                firstName: 'string',
                secondName: 'string',
                patronymic: 'string',
                phone: 'string',
                email: 'string',
                time: 'string',
                rating: 3.7,
            },
        ]);
        // return this.httpClient.get<Client[]>('/clients');
    }
}
