import express from 'express';
import { registerCustomer, loginCustomer, updateCustomer, getCustomerProfile } from '../controller/customerController.js';

const router = express.Router();

// Create a new customer
router.post('/', registerCustomer);

router.post('/login', loginCustomer);


// Get a customer by ID
router.get('/:customerID', getCustomerProfile);

// Update a customer
router.put('/:customerID', updateCustomer);

// Delete a customer
// router.delete('/:customerID', deleteCustomer);

export default router;
