import { Persona } from './classes/Persona';
import { Experiencia } from './classes/Experiencia';
import { Habilidad } from './classes/Habilidad';
import { Estudio } from './classes/Estudio';
import { Expectativa } from './classes/Expectativa';
import * as fs from 'fs';

export class Portfolio {
  private personas: Persona[] = [];
  private experiencias: Experiencia[] = [];
  private habilidades: Habilidad[] = [];
  private estudios: Estudio[] = [];
  private expectativas: Expectativa[] = [];

  constructor() {
    this.cargarDatos();
  }

  agregarPersona(persona: Persona): void {
    this.personas.push(persona);
    this.guardarDatos();
  }

  eliminarPersona(dni: string): void {
    this.personas = this.personas.filter(p => p.dni !== dni);
    this.guardarDatos();
  }

  listarPersonas(): Persona[] {
    return this.personas;
  }

  agregarExperiencia(exp: Experiencia): void {
    this.experiencias.push(exp);
    this.guardarDatos();
  }

  agregarHabilidad(hab: Habilidad): void {
    this.habilidades.push(hab);
    this.guardarDatos();
  }

  agregarEstudio(est: Estudio): void {
    this.estudios.push(est);
    this.guardarDatos();
  }

  agregarExpectativa(exp: Expectativa): void {
    this.expectativas.push(exp);
    this.guardarDatos();
  }

  private cargarDatos(): void {
    try {
      const data = fs.readFileSync('data.json', 'utf-8');
      const jsonData = JSON.parse(data);

      this.personas = jsonData.personas || [];
      this.experiencias = jsonData.experiencias || [];
      this.habilidades = jsonData.habilidades || [];
      this.estudios = jsonData.estudios || [];
      this.expectativas = jsonData.expectativas || [];
    } catch {
      console.log("No se pudo cargar el archivo, se creará uno nuevo.");
    }
  }

  private guardarDatos(): void {
    const data = {
      personas: this.personas,
      experiencias: this.experiencias,
      habilidades: this.habilidades,
      estudios: this.estudios,
      expectativas: this.expectativas
    };
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
  }
}