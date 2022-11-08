import { Role } from '../../modules/shared/cosntants/role';

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
    ID: number;
    Patronymic: string;
    Phone: string;
    Role: [
        {
            Id: number;
            Name: Role;
        }
    ];
    SecondName: string;
    UpdatedAt: string;
}
