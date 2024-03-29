import express from 'express';
import { createOrderDetails, getOrderDetailsByOrderID } from '../controller/orderDetailsController.js';

const router = express.Router();

// Create a new order detail
router.post('/', createOrderDetails);

// Get an order detail by ID
router.get('/:orderDetailID', getOrderDetailsByOrderID);

// // Update an order detail
// router.put('/:orderDetailID', updateOrderDetail);

// // Delete an order detail
// router.delete('/:orderDetailID', deleteOrderDetail);

export default router;
