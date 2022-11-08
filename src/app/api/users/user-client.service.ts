import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../login/dto';
import { RegisterUser } from './dto';
import { Role } from '../../modules/shared/cosntants/role';

@Injectable({
    providedIn: 'root',
})
export class UserClientService {
    constructor(private readonly httpClient: HttpClient) {}

    getUserInfo(): Observable<User> {
        return this.httpClient.get<User>('/users/info');
    }

    getUsers(): Observable<User[]> {
        return this.httpClient.get<User[]>('/users/');
    }

    registerUser(req: RegisterUser): Observable<void> {
        return this.httpClient.post<void>('/users/register', req);
    }

    addRoles(userId: number, roles: Role[]) {
        return this.httpClient.put('/users/add-role', { user_id: userId, roles: roles });
    }

    deleteRole(userId: number, role: Role) {
        return this.httpClient.delete('/users/delete-role', { body: { user_id: userId, role_name: role } });
    }
}
