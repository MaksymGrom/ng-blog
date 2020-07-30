import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import {RouterModule} from '@angular/router';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomePageComponent
      }
    ])
  ]
})
export class HomeModule { }
