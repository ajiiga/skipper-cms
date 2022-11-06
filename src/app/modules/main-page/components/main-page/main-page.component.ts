import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../../api/login/dto';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
    user: User;
    constructor(public userService: UserService) {
        this.user = userService.user;
    }

    ngOnInit(): void {}
}
