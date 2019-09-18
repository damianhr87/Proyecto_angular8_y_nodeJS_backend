import { ListItem } from './list-item.model';

export class Alumno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public sexo: ListItem,
    public activo: boolean,
    public perfil: ListItem
  ) {}
}
