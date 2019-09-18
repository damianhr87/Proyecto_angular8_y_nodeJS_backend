import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../../../@shared/dialogs/confirm-dialog/confirm-dialog.component';
import { Router } from '@angular/router';
import { StateService } from '../../../@core/services/state-manager.service';
import { AlumnosHttpService } from '../../../@core/services/alumnos-http.service';

@Component({
  selector: 'app-alumno-manager',
  templateUrl: './alumno-manager.component.html',
  styleUrls: ['./alumno-manager.component.css']
})
export class AlumnoManagerComponent implements OnInit {

  alumnos: Alumno[];
  alumnoSeleccionado: Alumno;

  constructor(
    private alumnosServices: AlumnosHttpService, // AlumnosArrayService,
    public dialog: MatDialog,
    private router: Router,
    private stateService: StateService
  ) { }

  ngOnInit() {

    this.alumnosServices.getAll().subscribe(
      alumnos => this.alumnos = alumnos
    );
    this.stateService.setApplicationTitle('Administración de Alumnos');

  }

  filtrarAlumnos(filtro: string) {
    this.alumnosServices.filterByNombreApellido(filtro).subscribe(
      alumnos => this.alumnos = alumnos
    );
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    console.log(alumno);
  }

  agregarAlumno() {
    this.router.navigate(['alumnos/editor', 'agregar']);
  }


  eliminarAlumno(alumno: Alumno) {
    const confirmDialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        titulo: 'Eliminar alumno',
        mensaje: `Desea eliminar al ${alumno.nombre} ${alumno.apellido}?`
      }
    });

    confirmDialogRef.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.alumnosServices.delete(alumno);
        this.alumnosServices.getAll().subscribe(
          alumnos => this.alumnos = alumnos
        );
      }
    });

  }
}
