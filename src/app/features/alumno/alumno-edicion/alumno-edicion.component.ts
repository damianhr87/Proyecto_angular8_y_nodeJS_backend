import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Alumno } from '../../../models/alumno.model';
import { ListItem } from '../../../models/list-item.model';
import { SexoListService, PerfilListService } from '../../../@core/services/list-item.service';
import { AlumnosArrayService } from '../../../@core/services/alumnos-array.service';
import { AlumnosHttpService } from '../../../@core/services/alumnos-http.service';


@Component({
  selector: 'app-alumno-edicion',
  templateUrl: './alumno-edicion.component.html',
  styleUrls: ['./alumno-edicion.component.css']
})
export class AlumnoEdicionComponent implements OnInit {

  alumno: Alumno;
  operacion: string;

  sexos: ListItem[];
  perfiles: ListItem[];

  constructor(
    private sexoList: SexoListService,
    private perfilesList: PerfilListService,
    private activeRouter: ActivatedRoute,
    private alumnosService: AlumnosHttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.sexos = this.sexoList.list;
    this.perfiles = this.perfilesList.list;

    this.operacion = this.activeRouter.snapshot.paramMap.get('operacion');

    switch (this.operacion ) {
      case 'editar':
          const id = Number(this.activeRouter.snapshot.paramMap.get('id'));
          this.alumnosService.getById(id).subscribe( alumno => {
            this.alumno = alumno;
            if (!this.alumno) {
              // alumno inexistente, volver a mostrar la lista de alumnos
              this.router.navigate(['alumnos']);
            }
          });

          break;
      case 'agregar':
          this.alumno = new Alumno(0, '', '', {id: 1, descripcion: ''}, true, {id: 1, descripcion: ''});
          break;
      default:
          this.router.navigate(['alumnos']);
          break;
    }

  }

  cancelar() {
    this.router.navigate(['alumnos']);
  }

  guardar(formulario: any) {
    const alumno = new Alumno(
      this.alumno.id,
      formulario.nombre,
      formulario.apellido,
      this.sexoList.get(formulario.sexoId),
      formulario.activo,
      this.perfilesList.get(formulario.perfilId)
    );

    if (this.operacion === 'editar') {
      this.alumnosService.update(alumno).subscribe(
        () => this.router.navigate(['alumnos'])
      );
    } else {
      this.alumnosService.add(alumno).subscribe(
        () => this.router.navigate(['alumnos'])
      );
    }

  }
}
