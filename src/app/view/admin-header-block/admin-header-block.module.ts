import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderBlockComponent } from './blocks/admin-header-block/admin-header-block.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [AdminHeaderBlockComponent],
  exports: [
    AdminHeaderBlockComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AdminHeaderBlockModule { }
