import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
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
    //#endregion

    //#region catalog
    public static catalogUrl = 'catalog';
    public static catalogWithSlash = '/' + NavigationService.catalogUrl;

    getCatalogLink(): string[] {
        return [NavigationService.catalogUrl];
    }
    //#endregion
}
