import {createAction, props} from '@ngrx/store';
import {NestedTreeNode} from './admin-menu.reducer';

export const initMenu = createAction(
  '[Admin Menu] init'
);

export const initMenuSuccess = createAction(
  '[Admin Menu] init success',
  props<{data: NestedTreeNode[]}>()
);

export const initMenuFailed = createAction(
  '[Admin Menu] init failed',
  props<{serverError: string}>()
);
