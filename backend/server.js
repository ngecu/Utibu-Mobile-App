import express, { json } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser'
// Import your route handlers here
import customerRoutes from './routes/customerRoutes.js';
import invoiceRoutes from './routes/invoiceRoutes.js';
import medicationRoutes from './routes/medicationRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import orderDetailsRoutes from './routes/orderDetailsRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';
import stockMovementRoutes from './routes/stockMovementRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(json());


app.get('/health',(req,res)=>{
  console.log(req);
  res.status(200).json({message:'Hello everyone .....I am happy'})
})

// Use your routes here
app.use('/customer', customerRoutes);
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
