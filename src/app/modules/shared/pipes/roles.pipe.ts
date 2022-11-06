import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../api/login/dto';

@Pipe({
    name: 'roles',
})
export class RolesPipe implements PipeTransform {
    transform(user: User): string {
        return user.Role.map((x) => x.Name).join(', ');
    }
}
