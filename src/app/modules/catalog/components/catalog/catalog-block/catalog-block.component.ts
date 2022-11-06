import { Component, Input, OnInit } from '@angular/core';
import { CatalogService } from '../../../services/catalog.service';
import { MatDialog } from '@angular/material/dialog';
import { CatalogModalComponent } from '../../catalog-modal/catalog-modal.component';

export interface CatalogModalData {
    id: number;
    level: number;
    parentId: number;
    editMode: boolean;
    name?: string;
}

@Component({
    selector: 'catalog-block',
    templateUrl: './catalog-block.component.html',
    styleUrls: ['./catalog-block.component.scss'],
})
export class CatalogBlockComponent implements OnInit {
    @Input() level: number;
    activeCatalog: number;
    parentId: number;
    constructor(public readonly catalogService: CatalogService, private readonly dialog: MatDialog) {}

    ngOnInit(): void {
        this.catalogService.catalogsSubject[this.level].subscribe((catalogBlock) => {
            this.activeCatalog = null;
            this.parentId = catalogBlock.parentId;
        });
    }

    setActive(id: number): void {
        if (this.level !== 3) {
            this.activeCatalog = id;
            this.catalogService.setChildes(id, this.level);
        }
    }

    openModal(event: Event, name: string = '', editMode: boolean = false, id: number = -1) {
        event.stopPropagation();
        this.dialog.open(CatalogModalComponent, {
            data: {
                level: this.level,
                parentId: this.parentId,
                editMode: editMode,
                name: name,
                id: id,
            },
        });
    }

    delete(event: Event, id: number) {
        event.stopPropagation();
        this.catalogService.delete(id, this.parentId, this.level);
    }
}
