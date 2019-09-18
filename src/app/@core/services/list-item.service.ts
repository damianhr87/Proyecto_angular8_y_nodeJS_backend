import { Injectable } from '@angular/core';
import { GenericList, ListItem } from '../../models/list-item.model';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class PerfilListService extends GenericList  {
  constructor() {
    super();
    this.list = [
      new ListItem( 0, 'Desarrollador'),
      new ListItem( 1, 'IT'),
      new ListItem( 2, 'Power User'),
      new ListItem( 3, 'DevOp'),
    ];
  }
}

@Injectable({
  providedIn: CoreModule
})
export class SexoListService extends GenericList  {
  constructor() {
    super();
    this.list = [
      new ListItem( 0, 'Femenino'),
      new ListItem( 1, 'Masculino'),
      new ListItem( 2, 'Otro')
    ];
  }
}
