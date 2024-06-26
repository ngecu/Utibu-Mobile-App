import express from 'express';
import { createOrder, getOrderByID, updateOrder } from '../controller/orderController.js';

const router = express.Router();

// Create a new order
router.post('/', createOrder);

// Get an order by ID
router.get('/:orderID', getOrderByID);

// Update an order
router.put('/:orderID', updateOrder);

// Delete an order
// router.delete('/:orderID', deleteOrder);

export default router;
