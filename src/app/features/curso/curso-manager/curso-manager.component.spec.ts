import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoManagerComponent } from './curso-manager.component';

describe('CursoManagerComponent', () => {
  let component: CursoManagerComponent;
  let fixture: ComponentFixture<CursoManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
