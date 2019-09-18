import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoItemComponent } from './alumno-item.component';

describe('AlumnoItemComponent', () => {
  let component: AlumnoItemComponent;
  let fixture: ComponentFixture<AlumnoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
