import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ADMIN_MENU_FEATURE_NAME, AdminMenuState} from './admin-menu.reducer';

const getFeature = createFeatureSelector<AdminMenuState>(ADMIN_MENU_FEATURE_NAME);

export const getLoading = createSelector(
  getFeature,
  state => state.loading
);

export const getLoaded = createSelector(
  getFeature,
  state => state.loaded
);

export const getServerError = createSelector(
  getFeature,
  state => state.serverError
);

export const getMenuData = createSelector(
  getFeature,
  state => state.data
);
