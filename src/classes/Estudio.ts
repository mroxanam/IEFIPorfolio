import { IEstudio } from "../interfaces/IEstudio";

export class Estudio implements IEstudio {
  constructor(public institucion: string, public titulo: string, public anio: number) {}
}