import { Persona } from './Persona';
import * as fs from 'fs';

export class PortfolioManager {
  private personas: Persona[] = [];

  // Agregar una nueva persona
  agregarPersona(persona: Persona): void {
    this.personas.push(persona);
    this.guardarPersonasEnArchivo();
  }

  // Buscar una persona por DNI
  buscarPersona(dni: string): Persona | undefined {
    return this.personas.find(persona => persona.dni === dni);
  }

  // Eliminar una persona por DNI
  borrarPersona(dni: string): void {
    this.personas = this.personas.filter(persona => persona.dni !== dni);
    this.guardarPersonasEnArchivo();
  }

  // Listar todas las personas
  listarPersonas(): void {
    this.personas.forEach(persona => console.log(persona));
  }

  // Guardar todas las personas en un archivo JSON
  private guardarPersonasEnArchivo(): void {
    fs.writeFileSync('personas.json', JSON.stringify(this.personas, null, 2));
  }
}
