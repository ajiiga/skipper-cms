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
    createdAt: string;
    deletedAt: {
        time: string;
        valid: boolean;
    };
    email: string;
    firstName: string;
    id: number;
    patronymic: string;
    phone: string;
    role: [
        {
            createdAt: string;
            deletedAt: {
                time: string;
                valid: boolean;
            };
            id: number;
            name: string;
            updatedAt: string;
        }
    ];
    secondName: string;
    updatedAt: string;
}
