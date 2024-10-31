"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Porfolio_1 = require("./Porfolio");
const Persona_1 = require("./Persona");
const portfolio = new Porfolio_1.Portfolio();
portfolio.agregarPersona(new Persona_1.Persona(12345678, "John", "Doe"));
portfolio.exportarPersonasAJson();
console.log("Datos exportados a JSON correctamente.");
