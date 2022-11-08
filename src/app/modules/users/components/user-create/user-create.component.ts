import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Role } from '../../../shared/cosntants/role';
import { UserService } from '../../../shared/services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.scss'],
})
export class UserCreateComponent implements OnInit {
    formGroup: FormGroup;
    roles: Role[] = Object.values(Role);
    constructor(private readonly userService: UserService, private readonly dialog: MatDialog) {}

    ngOnInit(): void {
        this.formGroup = new FormGroup(
            {
                email: new FormControl('', [Validators.required]),
                first_name: new FormControl('', [Validators.required]),
                second_name: new FormControl('', [Validators.required]),
                password: new FormControl('', [Validators.required]),
                confirmPassword: new FormControl('', [Validators.required]),
                roles_names: new FormControl([], [Validators.required]),
            },
            { validators: this.checkPasswords }
        );
    }

    send(): void {
        let { confirmPassword, ...form } = this.formGroup.value;
        this.userService.registerUser(form).subscribe(() => {
            this.dialog.closeAll();
        });
    }

    private checkPasswords: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
        let pass = group.get('password').value;
        let confirmPass = group.get('confirmPassword').value;
        return pass === confirmPass ? null : { notSame: true };
    };
}
