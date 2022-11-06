import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/layout/header/header.component';
import { SnackbarTemplateComponent } from './components/snackbar-template/snackbar-template.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RolesPipe } from './pipes/roles.pipe';
import { QuestionTemplateComponent } from './components/question-template/question-template.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [HeaderComponent, SnackbarTemplateComponent, RolesPipe, QuestionTemplateComponent],
    imports: [CommonModule, RouterOutlet, MatSnackBarModule, RouterLinkWithHref, MatCardModule, MatButtonModule],
    exports: [HeaderComponent, RolesPipe],
})
export class SharedModule {}
