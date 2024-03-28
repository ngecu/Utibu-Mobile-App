import express from 'express';
import { createInvoice, getInvoiceByID, updateInvoice, deleteInvoice } from '../controllers/invoiceController';

const router = express.Router();

// Create a new invoice
router.post('/', createInvoice);

// Get an invoice by ID
router.get('/:invoiceID', getInvoiceByID);

// Update an invoice
router.put('/:invoiceID', updateInvoice);

// Delete an invoice
router.delete('/:invoiceID', deleteInvoice);

export default router;