import { Component, OnInit } from '@angular/core';
import { MainCatalog } from '../../../../api/catalog/dto';
import { CatalogService } from '../../services/catalog.service';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
    constructor(private readonly catalogService: CatalogService) {}
    catalog1: MainCatalog[];

    ngOnInit(): void {
        this.catalogService.init();
    }
}
