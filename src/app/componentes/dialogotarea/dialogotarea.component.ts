import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea} from '../../clases/Tarea';

@Component({
  selector: 'app-dialogotarea',
  templateUrl: './dialogotarea.component.html',
  styleUrls: ['./dialogotarea.component.css']
})
export class DialogotareaComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogotareaComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Tarea) {}


  ngOnInit(): void {
  
  }

  cancelar() {
    this.dialogRef.close();
  }

}
