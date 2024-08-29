import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, tap, switchMap } from 'rxjs/operators';
import { AuthHttpService } from '../../../services/auth.http.service';
import { UserActions, setUser } from './user.actions';
import { SnackbarService } from '../../../services/snackbar.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { VideoHttpService } from '../../../services/video.http.service';

@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.login),
    switchMap((action: {username: string, password: string}) => 
        this.authSerivce.login(action.username, action.password)
      .pipe(
        tap(user => {
            this.store.dispatch(setUser({ id: user.id, name: user.name }))
            this.router.navigate(['lk'])
            this.snackBarService.openSnackbar(`Привет, ${user.name}!`)
            }),
        catchError((err) => {
            this.snackBarService.openSnackbar('Пользователь не найден')
            throw err;
        })
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private authSerivce: AuthHttpService,
    private videoService: VideoHttpService,
    private router: Router,
    private snackBarService: SnackbarService,
  ) {}
}