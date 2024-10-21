import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {tap, switchMap} from 'rxjs/operators';
import {VideoActions, setList} from './video.actions';
import {Store} from '@ngrx/store';
import {VideoHttpService} from '../../../services/video.http.service';

@Injectable()
export class VideoEffects {

  loadVideos = createEffect(() => this.actions$.pipe(
      ofType(VideoActions.getList),
      switchMap((action: { userId: number }) =>
        this.videoService.getAvailableVideos(action.userId)
          .pipe(
            tap(videos => {
              this.store.dispatch(setList({videos: videos}))
            })
          )
      )
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private videoService: VideoHttpService,
  ) {
  }
}
