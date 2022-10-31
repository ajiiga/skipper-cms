import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { NavigationService } from '../../shared/services/navigation.service';

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private readonly userService: UserService, private readonly router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        if (this.userService.user) {
            return this.router.parseUrl(NavigationService.homeUrlWithSlash);
        }
        return true;
    }
}
