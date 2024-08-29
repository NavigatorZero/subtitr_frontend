import { createSelector } from '@ngrx/store';
import { UserModel } from './user/user.model';
import {VideoEntity} from "../../services/video.http.service";

export interface UserState {
  user: UserModel;
}

export interface VideosState {
  videos: VideoEntity[]
}

export interface AppState {
  userState: UserState;
  videosState: VideosState
}

export const selectUserState = (state: AppState) => state.userState;

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
