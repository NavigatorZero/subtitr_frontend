import { createSelector } from '@ngrx/store';
import { UserModel } from './user/user.model';
 
export interface UserState {
  user: UserModel;
}
 
export interface AppState {
  userState: UserState;
}
 
export const selectUserState = (state: AppState) => state.userState;
 
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);