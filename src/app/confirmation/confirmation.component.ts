import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
@Component({
  selector: 'app-confirmation',
  imports: [MatButtonModule,MatDialogActions, MatDialogContent,MatDialogTitle],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmationComponent>) { }
  closeDialog(message: string): void {
    this.dialogRef.close(message);
  }

}