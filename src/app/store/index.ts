import {createFeatureSelector, createSelector} from '@ngrx/store';
import { UserModel } from './user/user.model';
import {VideoEntity} from "../../services/video.http.service";
import {VideoModel} from "./video/video.model";

export interface UserState {
  user: UserModel;
}

export interface VideosState {
  existingVideos: VideoModel[]
}

export interface AppState {
  userState: UserState;
  videosState: VideosState
}

export const selectUserState = (state: AppState) => state.userState;

export const selectVideosState = (state: AppState) => state.videosState;

export const selectExistingVideos = createSelector(
  selectVideosState,
  (state: VideosState) => state.existingVideos
);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);
