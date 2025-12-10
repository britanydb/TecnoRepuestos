const express = require('express');
const app = express();
app.use(express.json());

// endpoint mínimo para tests (si no tienes routes aún)
let products = [];
app.post('/api/v1/productos', (req, res) => {
  const { nombre, precio_unitario, stock_inicial } = req.body;
  if (!nombre) return res.status(400).json({ error: 'nombre requerido' });
  const newProduct = {
    id: products.length + 1,
    nombre,
    precio_unitario: Number(precio_unitario) || 0,
    stock_actual: Number(stock_inicial) || 0
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = app;

if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}
