import { IExperiencia } from '../interfaces/IExperiencia';

export class Experiencia implements IExperiencia {
  constructor(
    public empresa: string,
    public puesto: string,
    public anioInicio: number,
    public anioFin?: number
  ) {}
}

