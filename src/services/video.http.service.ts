import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

@Injectable()
export class VideoHttpService {
  constructor(private http: HttpService) {
  }

  uploadVideo(formData: FormData): Observable<any> {
    return this.http.performPostWithBody('translate-video/upload', formData)
  }

  getAvailableVideos(userId: number): Observable<Array<VideoEntity>> {
    return this.http.performGet(`translate-video/list/${userId}/all`)
  }
}

export type VideoEntity = {
  id: number;
  name: string;
  path: string;
  path_new: string;
  uuid: string;
}

