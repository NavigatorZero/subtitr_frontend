import { createAction, props } from '@ngrx/store';

export enum UserActions {
    login ='login',
    loginSuccess = 'loginSucess',
    setUser = 'setUser',
    removeUser = 'removeUser'
}

export const login = createAction(
    UserActions.login,
    props<{ username: string; password: string;}>(),
  );

export const setUser = createAction(
    UserActions.setUser,
    props<{ id: number; name: string }>()
  );

export const removeUser = createAction(UserActions.removeUser);