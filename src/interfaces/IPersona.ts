import { Habilidad } from '../classes/Habilidad';
import { Estudio } from '../classes/Estudio';
import { Experiencia } from '../classes/Experiencia';
import { Expectativa } from '../classes/Expectativa';

export interface IPersona {
  dni: string;
  nombre: string;
  apellido: string;
  edad: number;
  habilidades: Habilidad[];
  estudios: Estudio[];
  experiencias: Experiencia[];
  expectativas: Expectativa[];
}
