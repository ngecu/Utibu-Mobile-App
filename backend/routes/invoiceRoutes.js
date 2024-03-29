import express from 'express';
import { createInvoice, getInvoiceByID, updateInvoice } from '../controller/invoiceController.js';

const router = express.Router();

// Create a new invoice
router.post('/', createInvoice);

// Get an invoice by ID
router.get('/:invoiceID', getInvoiceByID);

// Update an invoice
router.put('/:invoiceID', updateInvoice);

// Delete an invoice
// router.delete('/:invoiceID', deleteInvoice);

export default router;