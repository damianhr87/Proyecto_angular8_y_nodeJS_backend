import { Component, OnInit } from '@angular/core';
import { StateService } from '../../../@core/services/state-manager.service';

@Component({
  selector: 'app-curso-manager',
  templateUrl: './curso-manager.component.html',
  styleUrls: ['./curso-manager.component.css']
})
export class CursoManagerComponent implements OnInit {


  constructor(
    private stateService: StateService
    ) { }

    ngOnInit() {

      this.stateService.setApplicationTitle('Administración de Cursos');

    }

}
