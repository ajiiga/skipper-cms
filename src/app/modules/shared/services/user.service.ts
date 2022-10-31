import { Injectable } from '@angular/core';
import { LoginRequest, User } from '../../../api/login/dto';
import { LoginClientService } from '../../../api/login/login-client.service';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public get user() {
        return this._user;
    }

    private _user: User;

    constructor(private readonly loginClient: LoginClientService, private readonly router: Router) {}

    login(request: LoginRequest): Observable<void> {
        return this.loginClient.login(request).pipe(
            map((res) => {
                this.setUser(res.user);
                this.router.navigate([NavigationService.homeUrl]);
            })
        );
    }

    logout() {
        this._user = undefined;
    }

    setUser(user: User): void {
        this._user = user;
    }
}
