import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environment';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PuntajeService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  buscarPuntaje(carrera: number, semestre: number) {
    return this.httpClient.post(`${base_url}/puntaje`, {
      id_programa: carrera,
      id_semestre: semestre,
    });
  }
}
