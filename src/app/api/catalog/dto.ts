export interface MainCatalog {
    id: number;
    name: string;
}

export interface Catalog {
    id: number;
    name: string;
    parent_id: number;
}
