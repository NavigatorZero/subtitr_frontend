import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { VideoHttpService } from "../services/video.http.service";
import { Observable } from "rxjs";
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fileName: string = '';
  uploadSuccess = false;

  currentsVideos$: Observable<Array<string>> = this.videoHttpService.getAvailableVideos();

  constructor(private videoHttpService: VideoHttpService) {
  }

  onFileSelected(event: Event) {
    const element = event.currentTarget as HTMLInputElement;

    if (element.files?.length) {
      for (let i = 0; i < element.files.length; i++) {
        const file: File | null | undefined = element.files.item(i);
        if (file) {
          this.videoHttpService.uploadVideo(file).subscribe((d) => {
            console.log(d, true)
            if (d) {
              this.uploadSuccess = true;
            }
          });
        }
      }
    }

  }

  onClosed() {
    this.uploadSuccess = false;
  }

  getVideoLink(uuid: string) {
    return `${environment.apiUrl}translate-video/${uuid}`
  }
}
