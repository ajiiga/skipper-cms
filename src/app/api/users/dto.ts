import { Role } from '../../modules/shared/cosntants/role';

export interface RegisterUser {
    email: string;
    first_name: string;
    password: string;
    roles_names: [Role];
    second_name: string;
}
