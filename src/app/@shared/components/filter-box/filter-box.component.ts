import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  @Output() filtrar = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  filtrarPor(filtro: string) {
    this.filtrar.emit(filtro);
  }
}
