const { calculatePurchaseTotal } = require('../../src/utils/purchase');

test('calcula subtotal sin descuento', () => {
  const items = [
    { cantidad: 2, precio_unitario: 10.5 },
    { cantidad: 1, precio_unitario: 5.25 }
  ];
  expect(calculatePurchaseTotal(items)).toBe(26.25);
});

test('aplica descuento porcentual', () => {
  const items = [{ cantidad: 10, precio_unitario: 2 }];
  expect(calculatePurchaseTotal(items, 10)).toBe(18.0);
});

test('items vacíos => 0', () => {
  expect(calculatePurchaseTotal([])).toBe(0);
});
