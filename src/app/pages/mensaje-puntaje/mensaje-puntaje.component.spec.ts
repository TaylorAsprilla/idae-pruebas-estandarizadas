import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajePuntajeComponent } from './mensaje-puntaje.component';

describe('MensajePuntajeComponent', () => {
  let component: MensajePuntajeComponent;
  let fixture: ComponentFixture<MensajePuntajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensajePuntajeComponent]
    });
    fixture = TestBed.createComponent(MensajePuntajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
