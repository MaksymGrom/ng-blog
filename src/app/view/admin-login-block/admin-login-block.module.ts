import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginFormUiComponent } from './ui/admin-login-form-ui/admin-login-form-ui.component';
import { AdminLoginBlockComponent } from './blocks/admin-login-block/admin-login-block.component';

@NgModule({
  declarations: [AdminLoginFormUiComponent, AdminLoginBlockComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AdminLoginBlockComponent
  ]
})
export class AdminLoginBlockModule { }
