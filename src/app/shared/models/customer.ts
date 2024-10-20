export interface customers {
    data:  Datum[];
    links: Links;
    meta:  Meta;
}

export interface Datum {
    id:            number;
    full_name:     string;
    type_document: TypeDocument;
    n_document:    number;
    phone:         string;
    email:         string;
}

export enum TypeDocument {
    Dni = "DNI",
}

export interface Links {
    first: string;
    last:  string;
    prev:  null | string;
    next:  null | string;
}

export interface Meta {
    current_page: number;
    from:         number;
    last_page:    number;
    links:        Link[];
    path:         string;
    per_page:     number;
    to:           number;
    total:        number;
}

export interface Link {
    url:    null | string;
    label:  string;
    active: boolean;
}
