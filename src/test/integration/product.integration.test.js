const request = require('supertest');
const app = require('../../index'); // revisa la ruta si exportaste app desde otro archivo

describe('POST /api/v1/productos', () => {
  it('crea producto y responde 201 con el objeto creado', async () => {
    const payload = { nombre: 'Cable USB', precio_unitario: 5.5, stock_inicial: 10 };
    const res = await request(app).post('/api/v1/productos').send(payload);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.nombre).toBe('Cable USB');
    expect(res.body.stock_actual).toBe(10);
  });

  it('valida nombre obligatorio', async () => {
    const res = await request(app).post('/api/v1/productos').send({ precio_unitario: 1 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
