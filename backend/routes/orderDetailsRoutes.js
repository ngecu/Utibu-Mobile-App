import express from 'express';
import { createOrderDetail, getOrderDetailByID, updateOrderDetail, deleteOrderDetail } from '../controllers/orderDetailsController';

const router = express.Router();

// Create a new order detail
router.post('/', createOrderDetail);

// Get an order detail by ID
router.get('/:orderDetailID', getOrderDetailByID);

// Update an order detail
router.put('/:orderDetailID', updateOrderDetail);

// Delete an order detail
router.delete('/:orderDetailID', deleteOrderDetail);

export default router;
