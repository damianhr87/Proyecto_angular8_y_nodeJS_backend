import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoItemComponent } from './alumno-item/alumno-item.component';
import { AlumnoListaComponent } from './alumno-lista/alumno-lista.component';
import { AlumnoManagerComponent } from './alumno-manager/alumno-manager.component';
import { AlumnoEdicionComponent } from './alumno-edicion/alumno-edicion.component';

const routes: Route[] = [
  { path: '' , component: AlumnoManagerComponent},
  { path: 'editor/:operacion/:id' , component: AlumnoEdicionComponent},
  { path: 'editor/:operacion' , component: AlumnoEdicionComponent},
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes) // rutas para los hijos.
  ],
  declarations: [
    AlumnoItemComponent,
    AlumnoListaComponent,
    AlumnoManagerComponent,
    AlumnoEdicionComponent,
  ]
})
export class AlumnoModule {}
