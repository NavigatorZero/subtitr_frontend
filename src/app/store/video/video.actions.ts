import {createAction, props} from '@ngrx/store';
import {VideoEntity} from "../../../services/video.http.service";
import {VideoModel} from "./video.model";

export enum VideoActions {
  getList = 'getList',
  setList = 'setList',
  removeItemFromList = 'removeItemFromList',
}

export const getList = createAction(
  VideoActions.getList,
  props<{ userId: number }>()
);

export const setList = createAction(
  VideoActions.setList,
  props<{ videos: VideoModel[] }>(),
);

export const removeItemFromList = createAction(
  VideoActions.removeItemFromList,
  props<{ itemId: number }>(),
);
