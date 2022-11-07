import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { UserService } from './user.service';
import { SnackbarService } from './snackbar.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private readonly userService: UserService, private readonly snackbarService: SnackbarService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            url: `http://85.193.81.148/api/v1${req.url}`,
            setHeaders: {
                Authorization: `Bearer ${this.userService.getToken()}`,
            },
        });
        return next.handle(req).pipe(
            tap(
                () => {},
                (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status !== 401) {
                            return;
                        }
                        this.userService.logout();
                        this.snackbarService.error('Сессия истекла, авторизируйтесь заново');
                    }
                }
            )
        );
    }
}
