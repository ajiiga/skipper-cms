import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/dto';

@Injectable({
    providedIn: 'root',
})
export class UserClientService {
    constructor(private readonly httpClient: HttpClient) {}

    getUserInfo(): Observable<User> {
        return this.httpClient.get<User>('/users/info');
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('/users/');
    }
}
