export class ListItem {
  constructor(
    public id: number,
    public descripcion: string
  ) {}
}

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
  