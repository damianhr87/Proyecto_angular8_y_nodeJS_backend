import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/services/state-manager.service';

@Component({
  selector: 'app-asistencia-manager',
  templateUrl: './asistencia-manager.component.html',
  styleUrls: ['./asistencia-manager.component.css']
})
export class AsistenciaManagerComponent implements OnInit {

  constructor(
    private stateService: StateService
    ) { }

    ngOnInit() {

      this.stateService.setApplicationTitle('Administración de Asistencias');

    }

}
