import { Injectable } from '@angular/core';
import { NavigationService } from './navigation.service';
import { Role } from '../cosntants/role';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root',
})
export class RoleGuardService {
    constructor(private readonly userService: UserService) {}

    roleGuard: Map<string, Role[]> = new Map<string, Role[]>([
        [NavigationService.homeUrlWithSlash, [Role.Admin, Role.Editor, Role.SuperAdmin, Role.Support]],
        [NavigationService.catalogWithSlash, [Role.Admin, Role.SuperAdmin, Role.Editor]],
        [NavigationService.usersWithSlash, [Role.SuperAdmin]],
        [NavigationService.clientsWithSlash, [Role.SuperAdmin, Role.Admin, Role.Support]],
    ]);

    hasOpen(link: string) {
        const userRoles = this.userService.user.Role.map((role) => role.Name);
        for (const role of userRoles) {
            const linkRoles = this.roleGuard.get(link);

            if (linkRoles?.includes(role)) {
                return true;
            }
        }
        return false;
    }
}
