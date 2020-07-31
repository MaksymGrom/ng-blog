import {createReducer, on} from '@ngrx/store';
import {login, loginFailed, loginSuccess} from './admin-auth.actions';

export const ADMIN_AUTH_FEATURE_NAME = 'admin-auth';

export interface AuthData {
  accessToken: string;
}

export interface AdminAuthState {
  loading: boolean;
  loaded: boolean;
  serverError: string;
  authData?: AuthData;
}

const initialState: AdminAuthState = {
  loaded: true,
  loading: false,
  serverError: ''
};

export const adminAuthReducer = createReducer(
  initialState,
  on(login, state => ({
    ...state,
    loading: true
  })),
  on(loginSuccess, (state, authData: AuthData) => ({
    ...state,
    authData,
    loaded: true,
    loading: false,
    serverError: ''
  })),
  on(loginFailed, (state, {serverError}) => ({
    ...state,
    authData: null,
    loaded: true,
    loading: false,
    serverError
  }))
);
