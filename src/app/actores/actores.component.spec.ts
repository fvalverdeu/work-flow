/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActoresComponent } from './actores.component';

describe('ActoresComponent', () => {
  let component: ActoresComponent;
  let fixture: ComponentFixture<ActoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
