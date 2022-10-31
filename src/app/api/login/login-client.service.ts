import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse } from './dto';

@Injectable({
    providedIn: 'root',
})
export class LoginClientService {
    constructor(private readonly httpClient: HttpClient) {}

    login(request: LoginRequest): Observable<LoginResponse> {
        return this.httpClient.post<LoginResponse>('http://85.193.81.148/auth/sign-in', request);
    }
}
