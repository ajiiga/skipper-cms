import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalog } from './dto';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CatalogClientService {
    constructor(private readonly httpClient: HttpClient) {}

    getMain(): Observable<Catalog[]> {
        return this.httpClient.get<Catalog[]>('/catalog/main-catalog');
    }

    get(parentId: number, catalogLevel: number): Observable<Catalog[]> {
        return this.httpClient.get<Catalog[]>(`/catalog/child?parent_id=${parentId}&catalog_level=${catalogLevel}`);
    }

    add(name: string, level: number, parentId: number): Observable<void> {
        return this.httpClient.post<void>('/catalog/', {
            catalog_name: name,
            catalog_level: level,
            catalog_parent_id: parentId,
        });
    }

    edit(id: number, level: number, name: string) {
        return this.httpClient.put('/catalog/', { catalog_id: id, catalog_level: level, newCatalogName: name });
    }

    delete(id: number, level: number) {
        return this.httpClient.delete<void>(`/catalog/?catalog_id=${id}&catalog_level=${level}`);
    }
}
