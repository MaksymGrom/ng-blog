import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginFormUiComponent } from './ui/admin-login-form-ui/admin-login-form-ui.component';
import { AdminLoginBlockComponent } from './blocks/admin-login-block/admin-login-block.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AdminLoginFormUiComponent, AdminLoginBlockComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminLoginBlockComponent
  ]
})
export class AdminLoginBlockModule { }
