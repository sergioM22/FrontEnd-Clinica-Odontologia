import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Cita } from 'src/app/model/cita';
import { TipoCita } from 'src/app/model/tipocita';
import { CitaService } from 'src/app/services/cita.service';
import { CitaCliDialogComponent } from './cita-cli-dialog/cita-cli-dialog.component';
import { CitaCliModalComponent } from './cita-cli-modal/cita-cli-modal.component';

@Component({
  selector: 'app-cita-cli',
  templateUrl: './cita-cli.component.html',
  styleUrls: ['./cita-cli.component.css']
})
export class CitaCliComponent implements OnInit {

  displayedColumns: string[] = ['idCita', 'dni', 'peso', 'altura', 'sexo','fecha','estado','tipocita','usuario','editar-eliminar'];
  dataSource: MatTableDataSource<Cita>;
  tipocita ?: TipoCita[];

  constructor(private dialog: MatDialog,
    private citaService: CitaService) { }

  ngOnInit(): void {
    this.citaService.citaActualizar.subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.citaService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data); 
    });
  }

  openModal(cita?: Cita){
    
    let cit = cita != null ? cita : new Cita();
    console.log("PASANDO ID: "+cit)
    this.dialog.open(CitaCliModalComponent,{
      width:"260px",
      data: cit
    })
  }
  onDelete(id:number){

    let dialogRef = this.dialog.open(CitaCliDialogComponent,{
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
