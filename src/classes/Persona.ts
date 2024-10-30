import { IPersona } from "../interfaces/IPersona";

export class Persona implements IPersona {
  constructor(public dni: number, public nombre: string, public apellido: string) {}
}