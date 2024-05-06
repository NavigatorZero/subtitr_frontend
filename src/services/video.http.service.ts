import { Injectable } from "@angular/core";
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpService } from "./http.service";

@Injectable()
export class VideoHttpService {
  constructor(private http: HttpService) {
  }

  uploadVideo(file: File): Observable<any> {
    let formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.performPostWithBody('translate-video/upload', formData)
  }

  getAvailableVideos(): Observable<Array<VideoEntity>> {
    return this.http.performGet('translate-video/list/all')
  }
}

export type VideoEntity = {
  id: number;
  name: string;
  path: string;
  path_new: string;
  uuid: string;
}

