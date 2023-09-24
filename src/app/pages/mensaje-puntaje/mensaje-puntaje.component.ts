import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensaje-puntaje',
  templateUrl: './mensaje-puntaje.component.html',
  styleUrls: ['./mensaje-puntaje.component.css'],
})
export class MensajePuntajeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  volverAlFormulario() {
    this.router.navigateByUrl('app/inicio');
  }
}
