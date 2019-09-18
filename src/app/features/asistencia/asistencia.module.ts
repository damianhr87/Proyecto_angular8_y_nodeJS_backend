import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/@shared/shared.module';
import { AsistenciaManagerComponent } from 'src/app/features/asistencia/asistencia-manager/asistencia-manager.component';

const routes: Route[] = [
  { path: '' , component: AsistenciaManagerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AsistenciaManagerComponent
  ]
})
export class AsistenciaModule {}
