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
    CreatedAt: string;
    DeletedAt: {
        time: string;
        valid: boolean;
    };
    Email: string;
    FirstName: string;
    Dd: number;
    Patronymic: string;
    Phone: string;
    Role: [
        {
            CreatedAt: string;
            DeletedAt: {
                time: string;
                valid: boolean;
            };
            Id: number;
            Name: string;
            UpdatedAt: string;
        }
    ];
    SecondName: string;
    UpdatedAt: string;
}
