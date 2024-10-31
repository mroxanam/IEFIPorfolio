"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Portfolio_1 = require("./Portfolio");
const portfolio = new Portfolio_1.Portfolio();
portfolio.agregarPersona(new Persona(12345678, "John", "Doe"));
portfolio.exportarPersonasAJson();
console.log("Datos exportados a JSON correctamente.");
