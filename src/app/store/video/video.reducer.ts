import {createReducer, on} from '@ngrx/store';
import {setList} from './video.actions';

export const initialState = {
  videos: [],
};

export const videoReducer = createReducer(
  initialState,
  on(setList, (state, action) => ({videos: action.videos})),
);

