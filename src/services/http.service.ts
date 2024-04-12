import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  private httpCallOptions: HttpOptions = {};

  performGet(url: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}${url}` , this.httpCallOptions);
  }

  performPost(url: string, params?: HttpParams): Observable<any> {
    return this.http.post(url, this.httpCallOptions, {...this.httpCallOptions, params: params});
  }

  performPostWithBody(url: string, params?: FormData): Observable<any> {
    let headers = new HttpHeaders();
    return this.http.post(`${environment.apiUrl}${url}`, params, {headers: headers});
  }
}

export type HttpOptions = {
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  context?: HttpContext;
  observe?: 'body';
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?: {
    includeHeaders?: string[];
  } | boolean;
}
