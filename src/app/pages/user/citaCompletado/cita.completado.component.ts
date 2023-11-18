import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/model/cita';
import { CitaService } from 'src/app/services/cita.service';
import { MatTableDataSource } from '@angular/material/table';
import { CompletadoConfirmDialogComponent } from './confirm-dialog/completado-confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CitaCompletadoModalComponent } from './cita-modal/cita-completado-modal.component';
import { TipoCita } from 'src/app/model/tipocita';

@Component({
  selector: 'app-cita-completado',
  templateUrl: './cita.completado.component.html',
  styleUrls: ['./cita.completado.component.css']
})
export class CitaCompletadoComponent implements OnInit {
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

    this.citaService.listarCitasCompletados().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
    });
  }
  openModal(cita?: Cita){
    
    let cit = cita != null ? cita : new Cita();
    console.log("PASANDO ID: "+cit)
    this.dialog.open(CitaCompletadoModalComponent,{
      width:"260px",
      data: cit
    })
  }
  onDelete(id:number){

    let dialogRef = this.dialog.open(CompletadoConfirmDialogComponent,{
    });

    dialogRef.afterClosed().subscribe(estado => {
      if(estado){
        this.citaService.eliminar(id).subscribe(()=>{
          this.citaService.listar().subscribe(data =>{
            this.dataSource = new MatTableDataSource(data);
          })
        })
      }
    })
  }

}