import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/services/cita.service';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CitaModalComponent } from './cita-modal/cita-modal.component';
import { TipoCita } from 'src/app/model/tipocita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  displayedColumns: string[] = ['idCita', 'dni', 'peso', 'altura', 'sexo','fecha','estado','tipocita','usuario','editar-eliminar'];
  dataSource: MatTableDataSource<Cita>;
  tipocita ?: TipoCita[];

  constructor(
    private dialog: MatDialog,
    private citaService: CitaService) {}

  ngOnInit(): void {
    this.citaService.citaActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.citaService.listarCitasPendientes().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
    });
  }
  openModal(cita?: Cita){
    
    let cit = cita != null ? cita : new Cita();
    console.log("PASANDO ID: "+cit)
    this.dialog.open(CitaModalComponent,{
      width:"260px",
      data: cit
    })
  }
  onDelete(id:number){

    let dialogRef = this.dialog.open(ConfirmDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
        this.citaService.eliminar(id).subscribe(()=>{
          this.citaService.listarCitasPendientes().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }

}