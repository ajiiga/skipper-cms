import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CatalogModalData } from '../catalog/catalog-block/catalog-block.component';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'app-catalog-modal',
    templateUrl: './catalog-modal.component.html',
    styleUrls: ['./catalog-modal.component.scss'],
})
export class CatalogModalComponent implements OnInit {
    name: string = '';
    loading: boolean = false;
    title: string;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: CatalogModalData,
        private readonly catalogService: CatalogService,
        private dialogRef: MatDialog
    ) {}

    ngOnInit(): void {
        if (this.data.editMode) {
            this.name = this.data.name;
            this.title = `Редактирование элемента "${this.data.name}"`;
        } else {
            this.title = `Новый элемент для уровня: ${this.data.level}`;
        }
    }

    send() {
        this.loading = true;
        if (!this.data.editMode) {
            this.catalogService.add(this.name, this.data.level, this.data.parentId);
        } else {
            this.catalogService.edit(this.data.id, this.data.level, this.name, this.data.parentId);
        }
        this.dialogRef.closeAll();
    }
}
