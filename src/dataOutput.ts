import { Portfolio } from "./Portfolio";

const portfolio = new Portfolio();
portfolio.agregarPersona(new Persona(12345678, "John", "Doe"));
portfolio.exportarPersonasAJson();
console.log("Datos exportados a JSON correctamente.");
