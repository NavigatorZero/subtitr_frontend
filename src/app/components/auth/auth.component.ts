import { Component } from '@angular/core';
import { AuthHttpService } from '../../../services/auth.http.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserState } from '../../store';
import { login } from '../../store/user/user.actions';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private readonly store: Store<UserState>) {
  }

  onSubmit() {
    if(this.profileForm.controls.login.value &&  this.profileForm.controls.password.value) {
      this.store.dispatch(login({
        username: this.profileForm.controls.login.value, 
        password: this.profileForm.controls.password.value
      }))
    }
  }
}
