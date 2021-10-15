import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConectorOpcionesComponent } from './conector-opciones.component';

describe('ConectorOpcionesComponent', () => {
  let component: ConectorOpcionesComponent;
  let fixture: ComponentFixture<ConectorOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConectorOpcionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConectorOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
