import { Router } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import  Swal  from 'sweetalert2';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-add-examen',
  templateUrl: './add-examen.component.html',
  styleUrls: ['./add-examen.component.css']
})
export class AddExamenComponent implements OnInit {

  usuario: Usuario;

  constructor(
    private userService : UserService
    ) { }

  ngOnInit(): void {
    // this.categoriaService.listarCategorias().subscribe(
    //   (dato:any) => {
    //     this.categorias = dato;
    //     console.log(this.categorias);
    //   },(error) => {
    //     console.log(error);
    //     Swal.fire('Error !!','Error al cargar los datos','error');
    //   }
    // )
  }

  aceptar(){
    console.log(this.usuario);
    
    this.userService.añadirMedico(this.usuario).subscribe(()=>{
    })
    // if(this.usuario != null && this.usuario.idUsuario!>0)
    // {
    //   this.userService.editar(this.usuario).subscribe(()=>{
    //     return this.userService.listar().subscribe(data=>{
    //       this.userService.usuarioActualizar.next(data);
    //     })
    //   })
    // }
    // else{
    //   this.userService.registrar(this.usuario).subscribe(()=>{
    //     this.userService.listar().subscribe(data =>{
    //       this.userService.usuarioActualizar.next(data);
    //     })
    //   })
    // }
   
  }

}
