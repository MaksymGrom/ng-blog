import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FromPageComponent } from './pages/from-page/from-page.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [FromPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FromPageComponent,
      },
    ])
  ]
})
export class FormModule { }
