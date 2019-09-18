import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenciaManagerComponent } from './asistencia-manager.component';

describe('AsistenciaManagerComponent', () => {
  let component: AsistenciaManagerComponent;
  let fixture: ComponentFixture<AsistenciaManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsistenciaManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
