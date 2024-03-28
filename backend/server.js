import express, { json } from 'express';
import cors from 'cors';
import http from 'http';
import dbHelper from './dbhelpers/dbhelpers.js';

// Import your route handlers here
import customerRoutes from './routes/customerRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import medicationRoutes from './routes/medicationRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import orderDetailsRoutes from './routes/orderDetailsRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import stockMovementRoutes from './routes/stockMovementRoutes.js';

const app = express();

app.use(cors());
app.use(json());

// Use your routes here
app.use('/customers', customerRoutes);
app.use('/invoices', invoiceRoutes);
app.use('/medications', medicationRoutes);
app.use('/orders', orderRoutes);
app.use('/order-details', orderDetailsRoutes);
app.use('/payments', paymentRoutes);
app.use('/stock-movements', stockMovementRoutes);


app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    message: error.message || 'Internal Server Error',
  });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
