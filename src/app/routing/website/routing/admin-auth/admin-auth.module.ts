import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {AdminLoginBlockModule} from '../../../../view/admin-login-block/admin-login-block.module';

@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    AdminLoginBlockModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginPageComponent
      }
    ])
  ]
})
export class AdminAuthModule { }
