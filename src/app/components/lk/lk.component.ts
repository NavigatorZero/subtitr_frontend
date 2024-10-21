import { Component } from '@angular/core';
import {Observable, first, switchMap, tap, filter, delay} from "rxjs";
import { VideoEntity, VideoHttpService } from '../../../services/video.http.service';
import { environment } from '../../../environments/environment';
import { FormControl } from '@angular/forms';
import { AuthHttpService } from '../../../services/auth.http.service';
import {
  AppState,
  selectExistingVideos,
  selectUser,
  selectUserState,
  selectVideosState,
  UserState,
  VideosState
} from '../../store';
import { Store } from '@ngrx/store';
import {getList} from "../../store/video/video.actions";

@Component({
  selector: 'app-lk-component',
  templateUrl: './lk.component.html',
  styleUrl: './lk.component.scss'
})
export class AppLkComponent {
  fileName: string = '';
  uploadSuccess = false;
  fileCtrl = new FormControl<{name: string, id:number}[]>([]);
  speed = '';
  font = '';
  position = '';

  presets = [
    {name: 'tiny', abbrev: 'Очень очень быстро'},
    {name: 'base', abbrev: 'Очень быстро'},
    {name: 'small', abbrev: 'Быстро'},
    {name: 'medium', abbrev: 'Стандартно'},
    {name: 'large', abbrev: 'Долго'},
  ];

  fonts = [
    {name: 'arial', abbrev: 'arial'},
    {name: 'bebas', abbrev: 'BebasNeue'},
    {name: 'futura', abbrev: 'FuturaMD'},
  ];

  positions = [
    {name: 'top', abbrev: 'Вверху'},
    {name: 'middle', abbrev: 'В центре'},
    {name: 'bottom', abbrev: 'Снизу'},
  ];

  userId: number = 0;

  currentsVideos$ = this.videoState.select(selectExistingVideos).pipe(
    first((t)=>t !== undefined && t.length > 0),
    tap(videos => console.log(videos)),
  );

  user$ = this.userState.select(selectUser).pipe(
    first(v=>!!v),
    tap(u => this.userId = u?.id)
  )

  constructor(
    private videoHttpService: VideoHttpService,
    private authService: AuthHttpService,
    private userState: Store<any>,
    private videoState: Store<AppState>,
  ) {
  }

  uploadVideo() {
    this.fileCtrl.value?.forEach(e=>{
      var formData: any = new FormData();
      formData.append('file', e);
      formData.append('speed', this.speed);
      formData.append('position', this.position);
      formData.append('font', this.font);
      formData.append('userId', this.userId);

      this.videoHttpService.uploadVideo(formData).pipe(first()).subscribe((d) => {
        if (d) {
          this.uploadSuccess = true;
        }
      });
    })
  }

  files: File[] = [];

onSelect(event: { addedFiles: any; }) {
  this.files.push(...event.addedFiles);
}

onRemove(event: File) {
  this.files.splice(this.files.indexOf(event), 1);
}

onClosed() {
  this.uploadSuccess = false;
}

getVideoLink(videoEntity: VideoEntity) {
    return `${environment.apiUrl}translate-video/${videoEntity.id}`
}

logout() {
  this.authService.logout()
}
}
