import { IPersona } from '../interfaces/IPersona';
import { Habilidad } from './Habilidad';
import { Estudio } from './Estudio';
import { Experiencia } from './Experiencia';
import { Expectativa } from './Expectativa';

export class Persona implements IPersona {
  constructor(
    public dni: string,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public habilidades: Habilidad[] = [],
    public estudios: Estudio[] = [],
    public experiencias: Experiencia[] = [],
    public expectativas: Expectativa[] = []
  ) {}

  // Métodos CRUD para habilidades, estudios, experiencias y expectativas
  agregarHabilidad(habilidad: Habilidad): void {
    this.habilidades.push(habilidad);
  }

  borrarHabilidad(nombre: string): void {
    this.habilidades = this.habilidades.filter(habilidad => habilidad.nombre !== nombre);
  }

  agregarEstudio(estudio: Estudio): void {
    this.estudios.push(estudio);
  }

  borrarEstudio(titulo: string): void {
    this.estudios = this.estudios.filter(estudio => estudio.titulo !== titulo);
  }

  agregarExperiencia(experiencia: Experiencia): void {
    this.experiencias.push(experiencia);
  }

  borrarExperiencia(empresa: string): void {
    this.experiencias = this.experiencias.filter(exp => exp.empresa !== empresa);
  }

  agregarExpectativa(expectativa: Expectativa): void {
    this.expectativas.push(expectativa);
  }

  borrarExpectativa(descripcion: string): void {
    this.expectativas = this.expectativas.filter(exp => exp.descripcion !== descripcion);
  }
}

