// import * as express from 'express';
import express from 'express';

import { Request, Response, Router, NextFunction } from 'express';
import { Alumno } from './alumnos';

export class AlumnosRouter {
  private alumnos: Alumno[];

  constructor(app: express.Application, router: Router) {

    router.route('/alumnos')
    .get((req: Request, res: Response) => {
      res.status(200).json(this.getAll());
    })
    .post( (req: Request, res: Response) => {
      const data = req.body;
      this.add(data);
      res.status(200).json(data);
    })
    .put( (req: Request, res: Response) => {
      const data = req.body;
      this.update(data);
      res.status(200).json(data);
    });

    router.route('/alumnos/:id')
    .get((req: Request, res: Response) => {
      const id = Number(req.params.id);
      res.status(200).json(this.get(id));
    })
    .delete((req: Request, res: Response) => {
      const id = Number(req.params.id);
      res.status(200).send(this.delete(id));
    });

    router.route('/alumnos/filter/:nombre')
    .get((req: Request, res: Response) => {
      const nombre = req.params.nombre;
      res.status(200).send(this.filterbyNombreApellido(nombre));
    });

    const mockAlumnos = [
      {
        id: 1, nombre: 'Juan', apellido: 'Perez', sexo: { id: 1, descripcion: 'masculino' },
        perfil: { id: 0, descripcion: 'Desarrollador' }, activo: true
      },
      {
        id: 2, nombre: 'Pedro', apellido: 'Garcia', sexo: { id: 1, descripcion: 'masculino' },
        perfil: { id: 1, descripcion: 'IT' }, activo: true
      },
      {
        id: 3, nombre: 'Ana', apellido: 'Romero', sexo: { id: 0, descripcion: 'Femenino' },
        perfil: { id: 2, descripcion: 'Power User' }, activo: true
      },
      {
        id: 4, nombre: 'Maria', apellido: 'Gutierrez', sexo: { id: 0, descripcion: 'Femenino' },
        perfil: { id: 0, descripcion: 'Desarrollador' }, activo: true
      },
      {
        id: 5, nombre: 'Esteban', apellido: 'Smith', sexo: { id: 1, descripcion: 'masculino' },
        perfil: { id: 2, descripcion: 'Power User' }, activo: true
      }
    ];

    this.alumnos = mockAlumnos.map(al => {
      return new Alumno(al.id, al.nombre, al.apellido, al.sexo, al.activo, al.perfil)
    });


    console.log('setup Alumnos router: /alumnos');
  }

  getAll(): Alumno[] {
    return this.alumnos;
  }

  get(id: number) {
    return this.alumnos.find(alumno => alumno.id === id);
  }

  add(alumno: Alumno): number {
    alumno.id = new Date().valueOf(); // 'unique' id
    this.alumnos.push(alumno);
    return alumno.id;
  }

  delete(id: number): void {
    const index = this.alumnos.findIndex(a => a.id === id);
    this.alumnos.splice(index, 1);
  }

  update(alumno: Alumno) {
    const index = this.alumnos.findIndex(a => a.id === alumno.id);
    if (index >= 0) {
      this.alumnos[index] = alumno;
    } else {
      throw new Error('alumno inexistente');
    }
  }

  filterbyNombreApellido(nombre: string): Alumno[] {
    if (!nombre || nombre.length === 0) {
      return this.alumnos;
    }
    return this.alumnos.filter(
      a => (a.nombre + ' ' + a.apellido).toLowerCase().includes(nombre.toLowerCase())
    );
  }
}
