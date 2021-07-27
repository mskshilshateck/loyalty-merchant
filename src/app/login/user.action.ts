import { createAction, props } from '@ngrx/store';

export const UserDetail = createAction(
  '[Login Page] User Details',
  props<{ data: Object }>()
);