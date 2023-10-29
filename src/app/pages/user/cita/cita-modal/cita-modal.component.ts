import { Component, Inject,OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cita } from 'src/app/model/cita';
import { TipoCita } from 'src/app/model/tipocita';
import { Usuario } from 'src/app/model/usuario';
import { CitaService } from 'src/app/services/cita.service';
import { tipocitaService } from 'src/app/services/tipocita.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-cita-modal',
  templateUrl: './cita-modal.component.html',
  styleUrls: ['./cita-modal.component.css']
})
export class CitaModalComponent implements OnInit {
  cita: Cita = new Cita();
  tipocita: TipoCita[];
  usuario : Usuario[];

  constructor(
    private tipocitaService: tipocitaService,
    private dialogRef: MatDialogRef<CitaModalComponent>,
    private userService : UserService,
    private citaService : CitaService,
    @Inject(MAT_DIALOG_DATA) private data: Cita){ }
    
    ngOnInit():void{
    
        this.cita = new Cita();
        this.cita.idCita=this.data.idCita;
        this.cita.dni=this.data.dni;
        this.cita.peso=this.data.peso;
        this.cita.altura=this.data.altura;
        this.cita.sexo=this.data.sexo;
        this.cita.fecha=this.data.fecha;
        this.cita.estado=this.data.estado;
        this.cita.tipocita=this.data.tipocita;
        this.cita.usuario=this.data.usuario;
        
        this.tipocitaService.listar().subscribe(data=>{
          this.tipocita=data;
        })
        this.userService.listar().subscribe(data=>{
          this.usuario= data;
        })
    }

  aceptar(){
    if(this.cita != null && this.cita.idCita!>0)
    {
      this.citaService.editar(this.cita).subscribe(()=>{
        return this.citaService.listar().subscribe(data=>{
          this.citaService.citaActualizar.next(data);
        })
      })
    }
    else{
      this.citaService.registrar(this.cita).subscribe(()=>{
        this.citaService.listar().subscribe(data =>{
          this.citaService.citaActualizar.next(data);
        })
      })
    }
    this.cerrar();
  }

  cerrar(){
    this.dialogRef.close();
  }
}
