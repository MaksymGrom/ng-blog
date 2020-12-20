import {createAction, props} from '@ngrx/store';
import {AuthData} from './admin-auth.reducer';

export const login = createAction(
  '[Admin Auth] login',
  props<{login: string, password: string}>()
);

export const loginSuccess = createAction(
  '[Admin Auth] login success',
  props<{ authData: AuthData }>()
);

export const loginFailed = createAction(
  '[Admin Auth] login failed',
  props<{serverError: string}>()
);

export const initAdminAuth = createAction(
  '[Admin Auth] init admin auth'
);

export const logoutSuccess = createAction(
  '[Admin Auth] logout success'
);

export const extractLoginData = createAction(
  '[Admin Auth] extract login data'
);
