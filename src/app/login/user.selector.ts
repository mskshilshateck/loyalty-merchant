import { createSelector } from '@ngrx/store';





   
  export interface AppState {
    user: Object;
  }
   
  export const selectUser = (state: AppState) => state.user;
   
  export const selectFeatureCount = createSelector(
    selectUser,
    (user: Object) => user
  );