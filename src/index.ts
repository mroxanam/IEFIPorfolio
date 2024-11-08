import * as readline from 'readline';
import { Portfolio } from './porfolio';
import { Persona } from './classes/Persona';
import { Experiencia } from './classes/Experiencia';
import { Habilidad } from './classes/Habilidad';
import { Estudio } from './classes/Estudio';
import { Expectativa } from './classes/Expectativa';

const portfolio = new Portfolio();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = () => {
  console.log("\nSeleccione una opción:");
  console.log("1. Agregar Persona");
  console.log("2. Listar Personas");
  console.log("3. Agregar Experiencia");
  console.log("4. Agregar Habilidad");
  console.log("5. Agregar Estudio");
  console.log("6. Agregar Expectativa");
  console.log("7. Salir");

  rl.question("Opción: ", (opcion) => {
    switch(opcion) {
      case '1':
        agregarPersona();
        break;
      case '2':
        listarPersonas();
        break;
      case '3':
        agregarExperiencia();
        break;
      case '4':
        agregarHabilidad();
        break;
      case '5':
        agregarEstudio();
        break;
      case '6':
        agregarExpectativa();
        break;
      case '7':
        rl.close();
        break;
      default:
        console.log("Opción inválida.");
        menu();
    }
  });
};

const agregarPersona = () => {
  rl.question("Ingrese DNI: ", (dni) => {
    rl.question("Ingrese nombre: ", (nombre) => {
      rl.question("Ingrese apellido: ", (apellido) => {
        portfolio.agregarPersona(new Persona(dni, nombre, apellido));
        console.log("Persona agregada correctamente.");
        menu();
      });
    });
  });
};

const listarPersonas = () => {
  const personas = portfolio.listarPersonas();
  console.log("Personas:");
  personas.forEach((persona, index) => {
    console.log(`${index + 1}. DNI: ${persona.dni}, Nombre: ${persona.nombre}, Apellido: ${persona.apellido}`);
  });
  menu();
};

const agregarExperiencia = () => {
  rl.question("Ingrese empresa: ", (empresa) => {
    rl.question("Ingrese puesto: ", (puesto) => {
      rl.question("Ingrese años: ", (años) => {
        const experiencia = new Experiencia(empresa, puesto, parseInt(años));
        portfolio.agregarExperiencia(experiencia);
        console.log("Experiencia agregada correctamente.");
        menu();
      });
    });
  });
};

const agregarHabilidad = () => {
  rl.question("Ingrese nombre de la habilidad: ", (nombre) => {
    rl.question("Ingrese nivel de la habilidad (Básico, Intermedio, Avanzado): ", (nivel) => {
      const habilidad = new Habilidad(nombre, nivel);
      portfolio.agregarHabilidad(habilidad);
      console.log("Habilidad agregada correctamente.");
      menu();
    });
  });
};

const agregarEstudio = () => {
  rl.question("Ingrese institución: ", (institucion) => {
    rl.question("Ingrese título: ", (titulo) => {
      rl.question("Ingrese año de finalización: ", (añoFinalizacion) => {
        const estudio = new Estudio(institucion, titulo, parseInt(añoFinalizacion));
        portfolio.agregarEstudio(estudio);
        console.log("Estudio agregado correctamente.");
        menu();
      });
    });
  });
};

const agregarExpectativa = () => {
  rl.question("Ingrese descripción de la expectativa: ", (descripcion) => {
    const expectativa = new Expectativa(descripcion);
    portfolio.agregarExpectativa(expectativa);
    console.log("Expectativa agregada correctamente.");
    menu();
  });
};

menu();


