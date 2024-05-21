import { Injectable } from "@angular/core";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
  constructor(public snackBar: MatSnackBar) {
  }

  openSnackbar(message:string) {
    return this.snackBar.open(message,'',{
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "right"
    });
  }

}
