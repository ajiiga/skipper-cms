import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NavigationService } from '../../../services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
    constructor(private readonly userService: UserService, public readonly navigation: NavigationService) {}

    logout() {
        this.userService.logout();
    }
}
