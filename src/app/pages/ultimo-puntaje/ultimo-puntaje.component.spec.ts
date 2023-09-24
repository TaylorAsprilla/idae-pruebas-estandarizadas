import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoPuntajeComponent } from './ultimo-puntaje.component';

describe('UltimoPuntajeComponent', () => {
  let component: UltimoPuntajeComponent;
  let fixture: ComponentFixture<UltimoPuntajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UltimoPuntajeComponent]
    });
    fixture = TestBed.createComponent(UltimoPuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
