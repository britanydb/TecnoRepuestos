const { calculateAvailableStock } = require('../../src/utils/stock');

test('stock disponible = stockActual - reservado', () => {
  expect(calculateAvailableStock(10, 3)).toBe(7);
});

test('si reservado mayor a stock retorna 0', () => {
  expect(calculateAvailableStock(5, 10)).toBe(0);
});

test('valida parámetros no numéricos', () => {
  expect(() => calculateAvailableStock('a', 2)).toThrow();
});
