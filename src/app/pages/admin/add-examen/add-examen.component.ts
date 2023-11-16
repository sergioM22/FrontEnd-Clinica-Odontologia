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

  //usuario: Usuario;

  public usuario = {
    username : '',
    password : '',
    nombre : '',
    apellido : '',
    email : '',
    telefono : ''
  }

  constructor(
    private userService : UserService,
    private snack:MatSnackBar
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

  formSubmit(){
    console.log(this.usuario);
    if(this.usuario.username == '' || this.usuario.username == null){
       this.snack.open('Es necesario ingresar el nombre de usuario','Aceptar',{
        duration : 3000,
        verticalPosition : 'top',
        horizontalPosition : 'right'
       });
      return;
    }
    
    this.userService.añadirMedico(this.usuario).subscribe(
      (data) => {
        console.log(data);
        Swal.fire('Medico guardado','Medico registrado con exito en el sistema','success');
      },(error) => {
        console.log(error);
        this.snack.open('Ha ocurrido un error en el sistema !!','Aceptar',{
          duration : 3000
        });
      }
    )

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
