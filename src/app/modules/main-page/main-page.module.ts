import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    declarations: [MainPageComponent],
    imports: [CommonModule, MainPageRoutingModule, MatCardModule],
})
export class MainPageModule {}
