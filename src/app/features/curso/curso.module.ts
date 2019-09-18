import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoManagerComponent } from './curso-manager/curso-manager.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { RouterModule, Route, Routes } from '@angular/router';

const routes: Routes = [
  { path: '' , component: CursoManagerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CursoManagerComponent
  ],
  exports: [RouterModule]
})
export class CursoModule {}
