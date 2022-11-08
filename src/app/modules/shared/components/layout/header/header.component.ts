import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NavigationService } from '../../../services/navigation.service';
import { RoleGuardService } from '../../../services/role-guard.service';

export interface MenuItem {
    name: string;
    link: string;
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    constructor(
        public readonly navigation: NavigationService,
        private readonly userService: UserService,
        private readonly roleGuard: RoleGuardService
    ) {}

    menuItems: MenuItem[] = [
        {
            name: 'Каталог',
            link: NavigationService.catalogWithSlash,
        },
        {
            name: 'Сотрудники',
            link: NavigationService.usersWithSlash,
        },
    ];

    ngOnInit() {
        this.menuItems = this.menuItems.filter((item) => this.roleGuard.hasOpen(item.link));
    }

    logout() {
        this.userService.logout();
    }
}
