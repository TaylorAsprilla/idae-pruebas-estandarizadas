export class PuntajeModel {
  constructor(
    public id: number,
    public numeroAdmitidos: string,
    public id_programa: number,
    public id_ciclo: number,
    public id_semestre: number,
    public puntaje: number
  ) {}
}
