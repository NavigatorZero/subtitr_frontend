import {createAction, props} from '@ngrx/store';
import {VideoEntity} from "../../../services/video.http.service";

export enum VideoActions {
  getList = 'getList',
  setList = 'setList'
}

export const getList = createAction(
  VideoActions.getList,
);

export const setList = createAction(
  VideoActions.setList,
  props<{ videos: VideoEntity[] }>(),
);
