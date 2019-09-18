import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Alumno } from '../../models/alumno.model';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class AlumnosHttpService {

  serviceUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.serviceUrl = `${environment.apiUrl}/alumnos`;
  }

  getAll(): Observable<Alumno[]> {
   return this.http.get<Alumno[]>(this.serviceUrl);
  }

  getById(id: number): Observable<Alumno> {
    const getByIdUrl = `${this.serviceUrl}/${id.toString()}`;
    return this.http.get<Alumno>(getByIdUrl);
  }

  filterByNombreApellido(filtro: string): Observable<Alumno[]> {
    const filterUrl = `${this.serviceUrl}/filter/${filtro}`;
    return this.http.get<Alumno[]>(filterUrl);
  }

  update(alumno: Alumno) {
    return this.http.put(this.serviceUrl, alumno);
  }

  delete(alumno: Alumno) {
    const getByIdUrl = `${this.serviceUrl}/${alumno.id.toString()}`;
    return this.http.delete(getByIdUrl);
  }

  add(alumno: Alumno) {
    return this.http.post(this.serviceUrl, alumno);
  }
}
