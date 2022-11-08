import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { UserChangeRolesComponent } from './components/user-change-roles/user-change-roles.component';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [UsersComponent, UserCreateComponent, UserChangeRolesComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        SharedModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatMenuModule,
    ],
})
export class UsersModule {}
