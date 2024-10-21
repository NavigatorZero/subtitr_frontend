import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, tap, map, switchMap} from 'rxjs/operators';
import {AuthHttpService} from '../../../services/auth.http.service';
import {UserActions, setUser} from './user.actions';
import {SnackbarService} from '../../../services/snackbar.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {getList} from "../video/video.actions";

@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() => this.actions$.pipe(
      ofType(UserActions.login),
      switchMap((action: { username: string, password: string }) =>
        this.authService.login(action.username, action.password)
          .pipe(
            tap(user => {
              this.store.dispatch(setUser({id: user.id, name: user.name}))
              this.store.dispatch(getList({userId: user.id}))
              this.router.navigate(['lk'])
              this.snackBarService.openSnackbar(`Привет, ${user.name}!`)
            }),
            catchError((err) => {
              this.snackBarService.openSnackbar('Пользователь не найден')
              throw err;
            })
          ))
    ),
    {dispatch: false}
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private authService: AuthHttpService,
    private router: Router,
    private snackBarService: SnackbarService,
  ) {
  }
}
