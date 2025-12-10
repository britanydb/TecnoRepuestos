// src/utils/purchase.js
function calculatePurchaseTotal(items = [], discountPercent = 0) {
  if (!Array.isArray(items)) throw new Error('Items debe ser array');
  const subtotal = items.reduce((acc, it) => {
    const q = Number(it.cantidad) || 0;
    const p = Number(it.precio_unitario) || 0;
    return acc + q * p;
  }, 0);
  if (discountPercent) {
    const discount = (subtotal * discountPercent) / 100;
    return Number((subtotal - discount).toFixed(2));
  }
  return Number(subtotal.toFixed(2));
}
module.exports = { calculatePurchaseTotal };
