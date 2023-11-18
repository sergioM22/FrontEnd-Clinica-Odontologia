import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './completado-confirm-dialog.component.html',
  styleUrls: ['./completado-confirm-dialog.component.css']
})
export class CompletadoConfirmDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CompletadoConfirmDialogComponent>
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

