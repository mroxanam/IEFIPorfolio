"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(dni, nombre, apellido, edad, habilidades = [], estudios = [], experiencias = [], expectativas = []) {
        this.dni = dni;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.habilidades = habilidades;
        this.estudios = estudios;
        this.experiencias = experiencias;
        this.expectativas = expectativas;
    }
    // Métodos CRUD para habilidades, estudios, experiencias y expectativas
    agregarHabilidad(habilidad) {
        this.habilidades.push(habilidad);
    }
    borrarHabilidad(nombre) {
        this.habilidades = this.habilidades.filter(habilidad => habilidad.nombre !== nombre);
    }
    agregarEstudio(estudio) {
        this.estudios.push(estudio);
    }
    borrarEstudio(titulo) {
        this.estudios = this.estudios.filter(estudio => estudio.titulo !== titulo);
    }
    agregarExperiencia(experiencia) {
        this.experiencias.push(experiencia);
    }
    borrarExperiencia(empresa) {
        this.experiencias = this.experiencias.filter(exp => exp.empresa !== empresa);
    }
    agregarExpectativa(expectativa) {
        this.expectativas.push(expectativa);
    }
    borrarExpectativa(descripcion) {
        this.expectativas = this.expectativas.filter(exp => exp.descripcion !== descripcion);
    }
}
exports.Persona = Persona;
