import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environment';
import { map } from 'rxjs';
import { SemestreModel } from '../../models/semestre.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class SemestreService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  getSemestre() {
    return this.httpClient
      .get<any>(`${base_url}/semestres`)
      .pipe(
        map(
          (respuesta: { ok: boolean; semestres: SemestreModel[] }) =>
            respuesta.semestres
        )
      );
  }
}
