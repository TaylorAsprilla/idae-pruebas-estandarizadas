import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environment';
import { ProgramaModel } from '../../models/programa.model';
import { map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class ProgramaService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  getProgramas() {
    return this.httpClient
      .get<any>(`${base_url}/programas`)
      .pipe(
        map(
          (respuesta: { ok: boolean; programas: ProgramaModel[] }) =>
            respuesta.programas
        )
      );
  }
}
