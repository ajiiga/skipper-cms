import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogBlockComponent } from './components/catalog/catalog-block/catalog-block.component';
import { MatIconModule } from '@angular/material/icon';
import { CatalogModalComponent } from './components/catalog-modal/catalog-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [CatalogComponent, CatalogBlockComponent, CatalogModalComponent],
    imports: [
        CommonModule,
        CatalogRoutingModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        FormsModule,
    ],
})
export class CatalogModule {}
