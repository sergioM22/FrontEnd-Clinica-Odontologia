import  Swal  from 'sweetalert2';
import { CategoriaService } from './../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { TipoCita } from 'src/app/model/tipocita';
import { tipocitaService } from 'src/app/services/tipocita.service';

@Component({
  selector: 'app-view-categorias',
  templateUrl: './view-categorias.component.html',
  styleUrls: ['./view-categorias.component.css']
})
export class ViewCategoriasComponent implements OnInit {

  listaTipos:TipoCita[] = []

  constructor(private tipo: tipocitaService) { }

  ngOnInit(): void {
    this.tipo.listar().subscribe(
      (dato:any) => {
        this.listaTipos = dato;
        console.log(this.listaTipos);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al cargar los tipos de servicio','error');
      }
    )
  }

}
