import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private readonly userService: UserService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: `http://85.193.81.148/api/v1${req.url}`,
            setHeaders: {
                Authorization: `Bearer ${this.userService.getToken()}`,
            },
        });
        return next.handle(req);
    }
}
