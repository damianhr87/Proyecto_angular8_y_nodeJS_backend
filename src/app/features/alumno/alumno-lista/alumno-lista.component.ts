import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-lista',
  templateUrl: './alumno-lista.component.html',
  styleUrls: ['./alumno-lista.component.css']
})
export class AlumnoListaComponent implements OnInit {

  @Input() alumnos: Alumno[];
  @Output() seleccionar = new EventEmitter<Alumno>();
  @Output() eliminar = new EventEmitter<Alumno>();

  alumnoSeleccionado: Alumno = null;
  columnas = ['Nro', 'Nombre', 'Sexo', 'Perfil', 'Activo', 'Acciones'];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  seleccionarAlumno(alumno: Alumno) {
    this.alumnoSeleccionado = alumno;
    this.seleccionar.emit(alumno);
  }

  editarAlumno(alumno: Alumno) {
    this.router.navigate(['alumnos/editor', 'editar', alumno.id.toString()]);
  }

  eliminarAlumno(alumno: Alumno) {
    this.eliminar.emit(alumno);
  }

}
