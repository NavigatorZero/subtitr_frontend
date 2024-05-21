import { Injectable } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Observable, catchError, tap, throwError } from "rxjs";
import { HttpService } from "./http.service";
import { Router } from "@angular/router";

@Injectable()
export class AuthHttpService {
  constructor(private http: HttpService, private router: Router) {
  }

  isAuthentificated = false;

  login(username: string, password: string): Observable<any> {
    
    const httpParams = new HttpParams({fromObject: {
        username: username,
        password: password,
    }});

    return this.http.performPost('auth/login', httpParams).pipe(
      catchError(() => throwError(() => new Error('authentification failed'))),
      tap(_=> this.isAuthentificated = true)
    )
  }

  logout() {
    this.isAuthentificated = false;
    this.router.navigate(['']);
  }
}
