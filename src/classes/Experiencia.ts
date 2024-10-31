import { IExperiencia } from "../interfaces/IExperiencia";

export class Experiencia implements IExperiencia {
  constructor(public empresa: string, public cargo: string, public periodo: string) {}
}