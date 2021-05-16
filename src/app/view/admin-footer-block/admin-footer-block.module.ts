import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFooterBlockComponent } from './blocks/admin-footer-block/admin-footer-block.component';



@NgModule({
  declarations: [AdminFooterBlockComponent],
  exports: [
    AdminFooterBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminFooterBlockModule { }
