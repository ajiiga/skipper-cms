import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    constructor(private readonly router: Router) {}
    //#region home
    public static homeUrl = '';
    public static homeUrlWithSlash = '/' + NavigationService.homeUrl;

    getHomeLink(): string[] {
        return [NavigationService.homeUrl];
    }
    //#endregion

    //#region login
    public static loginUrl = 'login';
    public static loginUrlWithSlash = '/' + NavigationService.loginUrl;

    goToLogin() {
        this.router.navigate([NavigationService.loginUrl]);
    }
    //#endregion

    //#region catalog
    public static catalogUrl = 'catalog';
    public static catalogWithSlash = '/' + NavigationService.catalogUrl;

    getCatalogLink(): string[] {
        return [NavigationService.catalogUrl];
    }
    //#endregion

    //#region users
    public static usersUrl = 'users';
    public static usersWithSlash = '/' + NavigationService.usersUrl;
    //#endregion

    //#region clients
    public static clientsUrl = 'clients';
    public static clientsWithSlash = '/' + NavigationService.clientsUrl;
    //#endregion
}
