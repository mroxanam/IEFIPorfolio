import * as readlineSync from 'readline-sync';
import { Persona } from './classes/Persona';
import { Habilidad } from './classes/Habilidad';
import { Estudio } from './classes/Estudio';
import { Experiencia } from './classes/Experiencia';
import { Expectativa } from './classes/Expectativa';
import { PortfolioManager } from './classes/PortfolioManager';

const portfolioManager = new PortfolioManager();

function crearPersona(): void {
  const dni = readlineSync.question('DNI: ');
  const nombre = readlineSync.question('Nombre: ');
  const apellido = readlineSync.question('Apellido: ');
  const edad = parseInt(readlineSync.question('Edad: '));

  const persona = new Persona(dni, nombre, apellido, edad);
  portfolioManager.agregarPersona(persona);
  console.log('Persona agregada exitosamente.');
}

function seleccionarPersona(): Persona | undefined {
  const dni = readlineSync.question('Ingrese el DNI de la persona: ');
  return portfolioManager.buscarPersona(dni);
}

function manejarHabilidades(persona: Persona): void {
  const opcion = readlineSync.question('¿Qué deseas hacer con las habilidades? (1. Agregar, 2. Eliminar, 3. Ver): ');

  if (opcion === '1') {
    const nombre = readlineSync.question('Nombre de la habilidad: ');
    const nivel = readlineSync.question('Nivel de la habilidad: ');
    persona.agregarHabilidad(new Habilidad(nombre, nivel));
    console.log('Habilidad agregada.');
  } else if (opcion === '2') {
    const nombre = readlineSync.question('Nombre de la habilidad a eliminar: ');
    persona.borrarHabilidad(nombre);
    console.log('Habilidad eliminada.');
  } else if (opcion === '3') {
    console.log('Habilidades:', persona.habilidades);
  }
}

function manejarEstudios(persona: Persona): void {
  const opcion = readlineSync.question('¿Qué deseas hacer con los estudios? (1. Agregar, 2. Eliminar, 3. Ver): ');

  if (opcion === '1') {
    const titulo = readlineSync.question('Título del estudio: ');
    const institucion = readlineSync.question('Institución: ');
    const anio = parseInt(readlineSync.question('Año de finalización: '));
    persona.agregarEstudio(new Estudio(titulo, institucion, anio));
    console.log('Estudio agregado.');
  } else if (opcion === '2') {
    const titulo = readlineSync.question('Título del estudio a eliminar: ');
    persona.borrarEstudio(titulo);
    console.log('Estudio eliminado.');
  } else if (opcion === '3') {
    console.log('Estudios:', persona.estudios);
  }
}

function manejarExperiencias(persona: Persona): void {
  const opcion = readlineSync.question('¿Qué deseas hacer con las experiencias? (1. Agregar, 2. Eliminar, 3. Ver): ');

  if (opcion === '1') {
    const empresa = readlineSync.question('Nombre de la empresa: ');
    const puesto = readlineSync.question('Puesto desempeñado: ');
    const anioInicio = parseInt(readlineSync.question('Año de inicio: '));
    const anioFin = readlineSync.question('Año de finalización (deja vacío si sigue en curso): ');
    persona.agregarExperiencia(new Experiencia(empresa, puesto, anioInicio, anioFin ? parseInt(anioFin) : undefined));
    console.log('Experiencia agregada.');
  } else if (opcion === '2') {
    const empresa = readlineSync.question('Nombre de la empresa de la experiencia a eliminar: ');
    persona.borrarExperiencia(empresa);
    console.log('Experiencia eliminada.');
  } else if (opcion === '3') {
    console.log('Experiencias:', persona.experiencias);
  }
}

function manejarExpectativas(persona: Persona): void {
  const opcion = readlineSync.question('¿Qué deseas hacer con las expectativas? (1. Agregar, 2. Eliminar, 3. Ver): ');

  if (opcion === '1') {
    const descripcion = readlineSync.question('Descripción de la expectativa: ');
    persona.agregarExpectativa(new Expectativa(descripcion));
    console.log('Expectativa agregada.');
  } else if (opcion === '2') {
    const descripcion = readlineSync.question('Descripción de la expectativa a eliminar: ');
    persona.borrarExpectativa(descripcion);
    console.log('Expectativa eliminada.');
  } else if (opcion === '3') {
    console.log('Expectativas:', persona.expectativas);
  }
}

function main(): void {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Agregar persona');
    console.log('2. Seleccionar persona para editar');
    console.log('3. Listar personas');
    console.log('4. Salir');
    
    const opcion = readlineSync.question('Seleccione una opción: ');

    if (opcion === '1') {
      crearPersona();
    } else if (opcion === '2') {
      const persona = seleccionarPersona();
      if (persona) {
        console.log(`Gestionando la persona: ${persona.nombre} ${persona.apellido}`);
        
        while (true) {
          console.log('\nOpciones para editar los datos de la persona:');
          console.log('1. Manejar habilidades');
          console.log('2. Manejar estudios');
          console.log('3. Manejar experiencias');
          console.log('4. Manejar expectativas');
          console.log('5. Regresar');
          
          const subOpcion = readlineSync.question('Seleccione una opción: ');

          if (subOpcion === '1') {
            manejarHabilidades(persona);
          } else if (subOpcion === '2') {
            manejarEstudios(persona);
          } else if (subOpcion === '3') {
            manejarExperiencias(persona);
          } else if (subOpcion === '4') {
            manejarExpectativas(persona);
          } else if (subOpcion === '5') {
            break;
          } else {
            console.log('Opción no válida.');
          }
        }
      } else {
        console.log('Persona no encontrada.');
      }
    } else if (opcion === '3') {
      portfolioManager.listarPersonas();
    } else if (opcion === '4') {
      console.log('Saliendo...');
      break;
    } else {
      console.log('Opción no válida.');
    }
  }
}

main();


