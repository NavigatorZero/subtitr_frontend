import { createReducer, on } from '@ngrx/store';
import { removeUser, setUser } from './user.actions';

export const initialState = {
  id: 0,
  name: ''
};

export const userReducer = createReducer(
  initialState,
  on(setUser, (state, action) =>  ({ id: action.id, name: action.name })),
  on(removeUser, (state) => initialState),
);

