import {createAction, props} from '@ngrx/store';

export const login = createAction(
  '[Admin Auth] login',
  props<{login: string, password: string}>()
);

export const loginSuccess = createAction(
  '[Admin Auth] login success',
  props<{accessToken: string}>()
);

export const loginFailed = createAction(
  '[Admin Auth] login failed',
  props<{serverError: string}>()
);
