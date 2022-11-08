import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { User } from '../../../../api/login/dto';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserCreateComponent } from '../user-create/user-create.component';
import { Role } from '../../../shared/cosntants/role';
import { UserChangeRolesComponent } from '../user-change-roles/user-change-roles.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
    users: User[];
    constructor(public readonly userService: UserService, private readonly dialog: MatDialog) {}
    formGroup: FormGroup;

    ngOnInit(): void {
        this.userService.initUsers();
    }

    openUserCreateModal() {
        this.dialog.open(UserCreateComponent, {
            width: '500px',
        });
    }

    openChangeRolesModal(userId: number, oldRoles: { Name: Role }[]) {
        this.dialog.open(UserChangeRolesComponent, {
            data: {
                userId: userId,
                oldRoles: oldRoles.map((roleObj) => roleObj.Name),
            },
        });
    }
}
