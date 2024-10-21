import {createReducer, on} from '@ngrx/store';
import {removeItemFromList, setList} from './video.actions';
import {VideoEntity} from "../../../services/video.http.service";
import {VideoModel} from "./video.model";
import {VideosState} from "../index";

export const initialState: VideosState = {
  existingVideos: new Array<VideoModel>(),
};

export const videoReducer = createReducer(
  initialState,
  on(setList, (state, action) => ({...state, existingVideos: action.videos})),
  on(removeItemFromList, (state, action) => ({...state, existingVideos: state.existingVideos.filter(video => video.id !== action.itemId)})),
);

