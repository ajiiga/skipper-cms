import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../shared/services/user.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    formGroup: FormGroup = this.getFormGroup();
    loading: boolean = false;

    constructor(private readonly userService: UserService, private readonly snackbarService: SnackbarService) {}

    send(): void {
        this.loading = true;
        this.userService.login(this.formGroup.value).subscribe(
            () => {
                this.loading = false;
            },
            (err) => {
                this.snackbarService.error(err.error.error);
            }
        );
    }

    private getFormGroup(): FormGroup {
        return new FormGroup({
            login: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }
}
