import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { SnackbarTemplateComponent } from './components/snackbar-template/snackbar-template.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RolesPipe } from './pipes/roles.pipe';

@NgModule({
    declarations: [HeaderComponent, SnackbarTemplateComponent, RolesPipe],
    imports: [CommonModule, RouterOutlet, MatSnackBarModule, RouterLinkWithHref],
    exports: [HeaderComponent, RolesPipe],
})
export class SharedModule {}
