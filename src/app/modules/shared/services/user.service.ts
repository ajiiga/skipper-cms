import { Injectable } from '@angular/core';
import { LoginRequest, User } from '../../../api/login/dto';
import { LoginClientService } from '../../../api/login/login-client.service';
import { catchError, forkJoin, map, mergeMap, Observable, of, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';
import { UserClientService } from '../../../api/users/user-client.service';
import { RegisterUser } from '../../../api/users/dto';
import { Role } from '../cosntants/role';

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
                }),
                catchError(() => of())
            );
        }
        return of();
    }

    getToken(): string {
        return localStorage.getItem(this.tokenKey);
    }

    private setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    //#region users
    users$: Subject<User[]> = new Subject<User[]>();

    initUsers() {
        this.getUsers().subscribe((users) => this.users$.next(users));
    }

    getUsers(): Observable<User[]> {
        return this.userClient.getUsers();
    }

    registerUser(form: RegisterUser): Observable<void> {
        return this.userClient.registerUser(form).pipe(
            map(() => {
                this.initUsers();
            })
        );
    }

    changeRole(userId: number, newRoles: Role[], oldRoles: Role[]): Observable<void> {
        return forkJoin(
            oldRoles.filter((role) => role !== Role.SuperAdmin).map((role) => this.userClient.deleteRole(userId, role))
        ).pipe(
            mergeMap(() => this.userClient.addRoles(userId, newRoles)),
            map(() => this.initUsers())
        );
    }
    //#endregion
}
