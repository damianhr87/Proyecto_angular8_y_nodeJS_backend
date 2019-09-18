import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoEdicionComponent } from './alumno-edicion.component';

describe('AlumnoEdicionComponent', () => {
  let component: AlumnoEdicionComponent;
  let fixture: ComponentFixture<AlumnoEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
