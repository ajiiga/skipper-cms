import { Roles } from '../../modules/shared/cosntants/roles';

export interface LoginRequest {
    login: string;
    password: string;
}

export interface LoginResponse {
    refresh_token: string;
    token: string;
    user: User;
}

export interface User {
    Email: string;
    FirstName: string;
    Dd: number;
    Patronymic: string;
    Phone: string;
    Role: [
        {
            Id: number;
            Name: Roles;
        }
    ];
    SecondName: string;
    UpdatedAt: string;
}
