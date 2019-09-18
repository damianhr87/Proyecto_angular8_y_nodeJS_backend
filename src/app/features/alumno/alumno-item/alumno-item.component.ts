import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';

@Component({
  selector: 'app-alumno-item',
  templateUrl: './alumno-item.component.html',
  styleUrls: ['./alumno-item.component.css']
})
export class AlumnoItemComponent implements OnInit {

  @Input() alumno: Alumno;
  @Input() seleccionado: boolean;
  @Output() selecionar = new EventEmitter<Alumno>();

  constructor() { }

  ngOnInit() {
  }

  flipSelection() {
    this.selecionar.emit(this.alumno);
  }
}
