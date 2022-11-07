import { Injectable } from '@angular/core';
import { LoginRequest, User } from '../../../api/login/dto';
import { LoginClientService } from '../../../api/login/login-client.service';
import { map, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { UserClientService } from '../../../api/users/user-client.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public get user() {
        return this._user;
    }

    private _user: User;
    private readonly tokenKey = 'token';

    constructor(
        private readonly loginClient: LoginClientService,
        private readonly userClient: UserClientService,
        private readonly router: Router,
        private readonly navigationService: NavigationService
    ) {}

    login(request: LoginRequest): Observable<void> {
        return this.loginClient.login(request).pipe(
            map((res) => {
                this.setUser(res.user);
                this.setToken(res.token);
                this.router.navigate([NavigationService.homeUrl]);
            })
        );
    }

    logout(): void {
        this._user = undefined;
        localStorage.removeItem(this.tokenKey);
        this.navigationService.goToLogin();
    }

    isAuthorized(): boolean {
        return !!localStorage.getItem(this.tokenKey);
    }

    setUser(user: User): void {
        this._user = user;
    }

    updateUser(): Observable<void> {
        if (this.isAuthorized()) {
            return this.userClient.getUserInfo().pipe(
                map((user: User) => {
                    this._user = user;
                })
            );
        }
        return of();
    }

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    //#region users
    getUsers(): Observable<User[]> {
        return this.userClient.getUsers();
    }
    //#endregion

    private setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }
}
