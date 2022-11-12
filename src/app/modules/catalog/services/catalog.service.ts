import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Catalog } from '../../../api/catalog/dto';
import { CatalogClientService } from '../../../api/catalog/catalog-client.service';

export interface CatalogBlock {
    parentId: number;
    catalogs: Catalog[];
}

@Injectable({
    providedIn: 'root',
})
export class CatalogService {
    catalogsSubject: Subject<CatalogBlock>[] = Array.apply(null, Array(5)).map(() => new Subject<CatalogBlock>());
    constructor(private readonly catalogClient: CatalogClientService) {}

    init(): void {
        this.catalogClient
            .getMain()
            .subscribe((catalogs) => this.catalogsSubject[0].next({ catalogs: catalogs, parentId: null }));
    }

    setChildes(parentId, level) {
        const updateChildes$ =
            level === -1 ? this.catalogClient.getMain() : this.catalogClient.get(parentId, level + 1);
        updateChildes$.subscribe((catalogs) => {
            this.catalogsSubject[level + 1].next({ catalogs: catalogs, parentId: parentId });
            this.setEmptyHighestLevels(level);
        });
    }

    add(name: string, level: number, parentId: number): void {
        this.catalogClient.add(name, level, parentId).subscribe(() => {
            this.setChildes(parentId, level - 1);
        });
    }

    delete(id: number, parentId: number, level: number): void {
        this.catalogClient.delete(id, level).subscribe(() => {
            this.setChildes(parentId, level - 1);
        });
    }

    edit(id: number, level: number, name: string, parentId) {
        this.catalogClient.edit(id, level, name).subscribe(() => {
            this.setChildes(parentId, level - 1);
        });
    }

    private setEmptyHighestLevels(level: number) {
        this.catalogsSubject.forEach((sub, index) => {
            if (index > level + 1) {
                sub.next({ catalogs: null, parentId: null });
            }
        });
    }
}
