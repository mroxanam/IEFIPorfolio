import { IEstudio } from '../interfaces/IEstudio';

export class Estudio implements IEstudio {
  constructor(
    public titulo: string,
    public institucion: string,
    public anio: number
  ) {}
}

