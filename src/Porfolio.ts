import { Persona } from "./Persona";
import * as fs from "fs";

export class Portfolio {
  private personas: Persona[] = [];

  agregarPersona(persona: Persona): void {
    this.personas.push(persona);
  }

  eliminarPersona(dni: number): void {
    this.personas = this.personas.filter(p => p.dni !== dni);
  }

  listarPersonas(): Persona[] {
    return this.personas;
  }

  exportarPersonasAJson(): void {
    const data = JSON.stringify(this.personas, null, 2);
    fs.writeFileSync("personas.json", data, "utf-8");
  }
}
