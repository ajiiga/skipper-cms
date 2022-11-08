import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from '../../../shared/services/user.service';
import { Role } from '../../../shared/cosntants/role';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

export interface ChangeRoleData {
    userId: number;
    oldRoles: Role[];
}

@Component({
    selector: 'app-user-change-roles',
    templateUrl: './user-change-roles.component.html',
    styleUrls: ['./user-change-roles.component.scss'],
})
export class UserChangeRolesComponent implements OnInit {
    formGroup: FormGroup;
    roles: Role[] = Object.values(Role);
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ChangeRoleData,
        private readonly userService: UserService,
        private readonly dialog: MatDialog
    ) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup({
            roles_names: new FormControl(this.data.oldRoles, [Validators.required]),
        });
    }

    send(): void {
        this.userService
            .changeRole(this.data.userId, this.formGroup.controls['roles_names'].value, this.data.oldRoles)
            .subscribe(() => {
                this.dialog.closeAll();
            });
    }
}
