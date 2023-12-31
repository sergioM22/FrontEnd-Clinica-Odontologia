import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cita } from 'src/app/model/cita';
import { TipoCita } from 'src/app/model/tipocita';
import { Usuario } from 'src/app/model/usuario';
import { CitaService } from 'src/app/services/cita.service';
import { UserService } from 'src/app/services/user.service';
import { tipocitaService } from 'src/app/services/tipocita.service';

@Component({
  selector: 'app-cita-cli-modal',
  templateUrl: './cita-cli-modal.component.html',
  styleUrls: ['./cita-cli-modal.component.css']
})
export class CitaCliModalComponent implements OnInit {

  cita: Cita;
  tipocita: TipoCita[];
  usuario : Usuario[];

  constructor(
    private dialogRef: MatDialogRef<CitaCliModalComponent>,
    private tipocitaService: tipocitaService,
    private userService : UserService,
    private citaService : CitaService,
    @Inject(MAT_DIALOG_DATA) private data: Cita
  ) { }

  ngOnInit(): void {
    this.citaService.listarPorId(this.data.idCita).subscribe((resultado)=>{
      console.log(resultado);

    })

    
      this.cita = new Cita();
      
      console.log("DATA: "+this.data)
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
    console.log(this.cita);
    console.log(this.cita.idCita);
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
