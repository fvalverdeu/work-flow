import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaOpcionesComponent } from './tarea-opciones.component';

describe('TareaOpcionesComponent', () => {
  let component: TareaOpcionesComponent;
  let fixture: ComponentFixture<TareaOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
