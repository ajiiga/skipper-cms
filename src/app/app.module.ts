import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginGuard } from './modules/login/guards/login.guard';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { SharedModule } from './modules/shared/shared.module';
import { TokenInterceptor } from './modules/shared/services/token.interceptor';
import { UserService } from './modules/shared/services/user.service';
import { forkJoin } from 'rxjs';

function loadInitData(userService: UserService) {
    return () => forkJoin([userService.updateUser()]);
}

@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, BrowserAnimationsModule, SharedModule],
    providers: [
        LoginGuard,
        {
            provide: HTTP_INTERCEPTORS,
            multi: true,
            useClass: TokenInterceptor,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: loadInitData,
            deps: [UserService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
