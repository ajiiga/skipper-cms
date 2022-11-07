import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationService } from './modules/shared/services/navigation.service';
import { LoginGuard } from './modules/login/guards/login.guard';
import { MainPageModule } from './modules/main-page/main-page.module';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { CatalogModule } from './modules/catalog/catalog.module';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
    {
        path: NavigationService.homeUrl,
        loadChildren: () => import('./modules/main-page/main-page.module').then(({ MainPageModule }) => MainPageModule),
        component: LayoutComponent,
        canActivate: [AuthGuard],
    },
    {
        path: NavigationService.loginUrl,
        loadChildren: () => import('./modules/login/login.module').then(({ LoginModule }) => LoginModule),
        canActivate: [LoginGuard],
    },
    {
        path: NavigationService.catalogUrl,
        loadChildren: () => import('./modules/catalog/catalog.module').then(({ CatalogModule }) => CatalogModule),
        component: LayoutComponent,
        canActivate: [AuthGuard],
    },
    {
        path: NavigationService.usersUrl,
        loadChildren: () => import('./modules/users/users.module').then(({ UsersModule }) => UsersModule),
        component: LayoutComponent,
        canActivate: [AuthGuard],
    },
    { path: '**', redirectTo: NavigationService.homeUrl },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
