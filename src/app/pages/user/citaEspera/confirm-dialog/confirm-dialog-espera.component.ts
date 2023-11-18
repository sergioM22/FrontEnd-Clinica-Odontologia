import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog-espera.component.html',
  styleUrls: ['./confirm-dialog-espera.component.css']
})
export class ConfirmDialogEsperaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogEsperaComponent>
  ){}
  ngOnInit(): void {
  }
  onEliminar(){
    this.dialogRef.close(true);
  }
  onCancelar(){
    this.dialogRef.close(false);
  }
}

