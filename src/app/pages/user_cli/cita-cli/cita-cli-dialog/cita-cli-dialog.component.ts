import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cita-cli-dialog',
  templateUrl: './cita-cli-dialog.component.html',
  styleUrls: ['./cita-cli-dialog.component.css']
})
export class CitaCliDialogComponent implements OnInit {

  
  constructor(
    public dialogRef: MatDialogRef<CitaCliDialogComponent>
  ) { }

  ngOnInit(): void {

   
  }

  onEliminar(){
    this.dialogRef.close(true);
  }
  onCancelar(){
    this.dialogRef.close(false);
  }

}
