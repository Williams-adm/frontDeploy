export interface showCustomer {
    data: Data;
}

export interface Data {
    id:            number;
    full_name:     string;
    type_document: string;
    n_document:    number;
    date_of_birth: Date;
    email:         string;
    country:       string;
    region:        string;
    province:      string;
    city:          string;
    street:        string;
    number_phone:  string;
}
