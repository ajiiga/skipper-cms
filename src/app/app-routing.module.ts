import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationService } from './modules/shared/services/navigation.service';
import { LoginGuard } from './modules/login/guards/login.guard';
import { MainPageModule } from './modules/main-page/main-page.module';
import { AuthGuard } from './modules/shared/guards/auth.guard';

const routes: Routes = [
    {
        path: NavigationService.homeUrl,
        loadChildren: () => import('./modules/main-page/main-page.module').then(({ MainPageModule }) => MainPageModule),
        canActivate: [AuthGuard],
    },
    {
        path: NavigationService.loginUrl,
        loadChildren: () => import('./modules/login/login.module').then(({ LoginModule }) => LoginModule),
        canActivate: [LoginGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
