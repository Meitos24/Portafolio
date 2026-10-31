import { expect, test } from 'vitest';
import { etiquetaSeleccionados } from './conteo';

test('un proyecto va en singular', () => {
    expect(etiquetaSeleccionados(1)).toBe('1 seleccionado');
});

// TODO: escribe aquí el segundo test, para 2 proyectos
test('dos proyectos va en plural', () => {
    expect(etiquetaSeleccionados(2)).toBe('2 seleccionados');
});