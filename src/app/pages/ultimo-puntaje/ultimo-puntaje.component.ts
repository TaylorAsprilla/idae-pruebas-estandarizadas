import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProgramaModel } from 'src/app/core/models/programa.model';
import { SemestreModel } from 'src/app/core/models/semestre.model';
import { ProgramaService } from 'src/app/core/services/programa/programa.service';
import { PuntajeService } from 'src/app/core/services/puntaje/puntaje.service';
import { SemestreService } from 'src/app/core/services/semestre/semestre.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ultimo-puntaje',
  templateUrl: './ultimo-puntaje.component.html',
  styleUrls: ['./ultimo-puntaje.component.css'],
})
export class UltimoPuntajeComponent implements OnInit {
  estudianteForm!: FormGroup;

  programasSubscription: Subscription = new Subscription();
  semestresSubscription: Subscription = new Subscription();
  programas: ProgramaModel[] = [];
  semestres: SemestreModel[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private programaService: ProgramaService,
    private semestreService: SemestreService,
    private puntajeService: PuntajeService
  ) {}

  ngOnInit(): void {
    this.estudianteForm = this.formBuilder.group({
      carrera: ['', Validators.required],
      semestre: ['', Validators.required],
    });

    this.programasSubscription = this.programaService.getProgramas().subscribe({
      next: (programas: ProgramaModel[]) => {
        this.programas = programas;
      },
      error: (error) => {
        console.error('Error al obtener los programas:', error);
      },
    });

    this.semestresSubscription = this.semestreService.getSemestre().subscribe({
      next: (semestres: SemestreModel[]) => {
        this.semestres = semestres;
      },
      error: (error) => {
        console.error('Error al obtener los programas:', error);
      },
    });
  }

  buscarCarrera(idCarrera: number): string | undefined {
    const programa = this.programas.find(
      (carrera) => Number(idCarrera) === carrera.id
    );

    return programa?.programa;
  }

  onSubmit() {
    if (this.estudianteForm.valid) {
      const { carrera, semestre } = this.estudianteForm.value;

      this.puntajeService.buscarPuntaje(carrera, semestre).subscribe(
        (respuesta: any) => {
          if (respuesta === undefined || respuesta.puntaje === null) {
            Swal.fire({
              title: 'Puntaje',
              icon: 'error',
              html: 'No aplica',
            });
          } else {
            Swal.fire({
              title: `Carrera: ${this.buscarCarrera(carrera)}`,
              html: `<b>Puntaje:</b> ${respuesta.puntaje}`,
              showCloseButton: true,
            });

            this.router.navigateByUrl('app/mensaje-puntaje');
          }
        },
        (error) => {
          Swal.fire({
            title: 'Puntaje',
            icon: 'error',
            html: 'No aplica',
          });
        }
      );
    }
  }
}
