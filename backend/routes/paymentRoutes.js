import express from 'express';
import { createPayment, getPaymentByID, updatePayment, deletePayment } from '../controllers/paymentController';

const router = express.Router();

// Create a new payment
router.post('/', createPayment);

// Get a payment by ID
router.get('/:paymentID', getPaymentByID);

// Update a payment
router.put('/:paymentID', updatePayment);

// Delete a payment
router.delete('/:paymentID', deletePayment);

export default router;
