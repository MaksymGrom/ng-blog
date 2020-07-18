import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ])
  ]
})
export class NotFoundModule { }
