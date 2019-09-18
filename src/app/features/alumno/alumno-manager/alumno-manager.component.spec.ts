import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoManagerComponent } from './alumno-manager.component';

describe('AlumnoManagerComponent', () => {
  let component: AlumnoManagerComponent;
  let fixture: ComponentFixture<AlumnoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
