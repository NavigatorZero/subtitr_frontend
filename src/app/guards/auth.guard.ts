import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthHttpService } from "../../services/auth.http.service";
import { UserState } from "../store";
import { Store } from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(
    private authService: AuthHttpService, 
    private router: Router,
    private store: Store<UserState>
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthentificated) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}