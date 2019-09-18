import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './@core/core.module';
import { SharedModule } from './@shared/shared.module';

import { CursoModule } from './features/curso/curso.module';
import { AsistenciaModule } from './features/asistencia/asistencia.module';
import { AlumnoModule } from './features/alumno/alumno.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

// rutas principales.
const routes: Routes = [
  { path: 'alumnos' , loadChildren: () => import('./features/alumno/alumno.module').then( m => m.AlumnoModule)},
  { path: 'cursos' , loadChildren: () => import('./features/curso/curso.module').then( m => m.CursoModule)},
  { path: 'asistencias' , loadChildren: () => import('./features/asistencia/asistencia.module').then( m => m.AsistenciaModule)},
  { path: '',  redirectTo: '/alumnos', pathMatch: 'full' },
  { path: '**',  redirectTo: '/alumnos', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
// me agrega trace en consola con informacion de que cargo y que no del modulo de routing
    RouterModule.forRoot(routes, {enableTracing: true} ),
    // app main modules
    SharedModule,
    CoreModule,
    // features
    CursoModule,
    AsistenciaModule,
    AlumnoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
