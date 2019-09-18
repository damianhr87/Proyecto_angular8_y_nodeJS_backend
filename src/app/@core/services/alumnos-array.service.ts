import { Injectable } from '@angular/core';
import { Alumno } from '../../models/alumno.model';
import { CoreModule } from '../core.module';

const mockAlumnos = [
  {id: 1, nombre: 'Juan', apellido: 'Perez', sexo: {id: 1, descripcion: 'Masculino'},
          perfil: {id: 0, descripcion: 'Desarrollador'}, activo: true},
  {id: 2, nombre: 'Pedro', apellido: 'Garcia', sexo: {id: 1, descripcion: 'Masculino'},
          perfil: {id: 1, descripcion: 'IT'}, activo: true},
  {id: 3, nombre: 'Ana', apellido: 'Romero', sexo: {id: 0, descripcion: 'Femenino'},
          perfil: {id: 2, descripcion: 'Power User'}, activo: true},
  {id: 4, nombre: 'Maria', apellido: 'Gutierrez', sexo: {id: 0, descripcion: 'Femenino'},
          perfil: {id: 0, descripcion: 'Desarrollador'}, activo: true},
  {id: 5, nombre: 'Esteban', apellido: 'Smith', sexo: {id: 1, descripcion: 'Masculino'},
          perfil: {id: 2, descripcion: 'Power User'}, activo: true}
];

@Injectable({
  providedIn: CoreModule
})
export class AlumnosArrayService {

  private alumnos = mockAlumnos;

  constructor() { }

  getAll(): Alumno[] {
    return this.alumnos;
  }

  getById(id: number): Alumno {
    return this.alumnos.find(
      a => a.id === id
    );
  }

  filterByNombreApellido(filtro: string): Alumno[] {
    return this.alumnos.filter(
      a => (a.nombre + ' ' + a.apellido).toLowerCase().includes(filtro.toLowerCase())
    );
  }

  update(alumno: Alumno) {
    const index = this.alumnos.findIndex( alu => alu.id === alumno.id);
    this.alumnos[index] = alumno;
  }

  delete(alumno: Alumno) {
    // const index = this.alumnos.findIndex( alu => alu.id === alumno.id);
    // this.alumnos.splice(index, 1);
    // this.alumnos = [...this.alumnos];
    this.alumnos = this.alumnos.filter(a => a.id !== alumno.id);
  }

  add(alumno: Alumno) {
    const lastID = this.alumnos[this.alumnos.length -1].id;
    alumno.id = lastID + 1;
    this.alumnos.push(alumno);
  }
}
