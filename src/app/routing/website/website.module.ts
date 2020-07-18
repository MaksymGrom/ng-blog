import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AdminGuestGuard} from './guards/admin-guest.guard';
import {AdminAuthGuard} from './guards/admin-auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./routing/home/home.module')
          .then(module => module.HomeModule)
      },
      {
        path: 'admin/auth',
        loadChildren: () => import('./routing/admin-auth/admin-auth.module')
          .then(module => module.AdminAuthModule),
        canLoad: [AdminGuestGuard],
        canActivate: [AdminGuestGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./routing/admin/admin.module')
          .then(module => module.AdminModule),
        canLoad: [AdminAuthGuard],
        canActivate: [AdminAuthGuard]
      },
      {
        path: '**',
        loadChildren: () => import('./routing/not-found/not-found.module')
          .then(module => module.NotFoundModule)
      }
    ])
  ],
  providers: [AdminGuestGuard, AdminAuthGuard]
})
export class WebsiteModule { }
