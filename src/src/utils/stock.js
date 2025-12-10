// src/utils/stock.js
function calculateAvailableStock(stockActual, reserved = 0) {
  if (!Number.isFinite(stockActual) || !Number.isFinite(reserved)) {
    throw new Error('Parámetros inválidos');
  }
  const available = stockActual - reserved;
  return available >= 0 ? available : 0;
}
module.exports = { calculateAvailableStock };
