import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavigationService } from '../services/navigation.service';
import { UserService } from '../services/user.service';
import { RoleGuardService } from '../services/role-guard.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly userService: UserService,
        private readonly router: Router,
        private readonly roleGuard: RoleGuardService
    ) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (!this.userService.isAuthorized()) {
            return this.router.parseUrl(NavigationService.loginUrl);
        }
        if (!this.roleGuard.hasOpen('/' + route.routeConfig.path)) {
            return this.router.parseUrl(NavigationService.homeUrl);
        }

        return true;
    }
}
