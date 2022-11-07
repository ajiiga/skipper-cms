import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../../api/login/dto';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[];
    constructor(private readonly userService: UserService) {}
    formGroup: FormGroup;

    ngOnInit(): void {
        this.userService.getUsers().subscribe((users) => (this.users = users));
    }
}
