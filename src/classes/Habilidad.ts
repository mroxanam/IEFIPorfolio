import { IHabilidad } from "../interfaces/IHabilidad";

export class Habilidad implements IHabilidad {
  constructor(public nombre: string, public nivel: string) {}
}