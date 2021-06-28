import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {ADMIN_MENU_FEATURE_NAME, adminMenuReducer} from './store/admin-menu.reducer';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {AdminMenuEffects} from './store/admin-menu.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(ADMIN_MENU_FEATURE_NAME, adminMenuReducer),
    HttpClientModule,
    EffectsModule.forFeature([AdminMenuEffects])
  ]
})
export class AdminMenuStoreModule { }
