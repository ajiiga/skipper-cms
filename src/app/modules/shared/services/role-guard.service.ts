import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Roles } from '../cosntants/roles';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class RoleGuardService {
    constructor(private readonly userService: UserService) {}

    roleGuard: Map<string, Roles[]> = new Map<string, Roles[]>([
        [NavigationService.homeUrlWithSlash, [Roles.Admin, Roles.Editor, Roles.SuperAdmin, Roles.Support]],
        [NavigationService.catalogWithSlash, [Roles.Admin, Roles.SuperAdmin, Roles.Editor]],
        [NavigationService.usersWithSlash, [Roles.Admin, Roles.SuperAdmin, Roles.Support]],
    ]);

    hasOpen(link: string) {
        const userRoles = this.userService.user.Role.map((role) => role.Name);
        for (const role of userRoles) {
            const linkRoles = this.roleGuard.get(link);

            if (linkRoles.includes(role)) {
                return true;
            }
        }
        return false;
    }
}
