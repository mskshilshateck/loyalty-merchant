import { Action, createReducer, on } from '@ngrx/store';
import * as UserAction from "./user.action"


export const intialState: Object = {};


const userReducer = createReducer(
    intialState,
    on(UserAction.UserDetail, (state,data) => ({ ...state, userDetails: data })),
   
  );


  export function reducer(state: Object | undefined, action: Action) {
    return userReducer(state, action);
  }