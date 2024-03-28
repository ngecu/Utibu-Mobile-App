import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for creating an invoice
export const createInvoice = async (req, res) => {
  try {
    const { customerID, orderID, totalAmount, dueDate } = req.body;

    // Generate a unique invoice ID
    const invoiceID = v4();

    // Execute SQL query to create the invoice
    await dbHelper.execute('INSERT INTO Invoices (InvoiceID, CustomerID, OrderID, TotalAmount, DueDate) VALUES (@invoiceID, @customerID, @orderID, @totalAmount, @dueDate)',
      {
        invoiceID,
        customerID,
        orderID,
        totalAmount,
        dueDate,
      });

    // Send response
    return res.status(200).json({
      message: 'Invoice created successfully',
      invoiceID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for updating an invoice
export const updateInvoice = async (req, res) => {
  try {
    const { invoiceID } = req.params;
    const { totalAmount, dueDate } = req.body;

    // Execute SQL query to update the invoice
    await dbHelper.execute('UPDATE Invoices SET TotalAmount = @totalAmount, DueDate = @dueDate WHERE InvoiceID = @invoiceID',
      {
        invoiceID,
        totalAmount,
        dueDate,
      });

    // Send response
    return res.status(200).json({
      message: 'Invoice updated successfully',
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching an invoice
export const getInvoice = async (req, res) => {
  try {
    const { invoiceID } = req.params;

    // Execute SQL query to fetch the invoice
    const invoice = await dbHelper.query('SELECT * FROM Invoices WHERE InvoiceID = @invoiceID', {
      invoiceID,
    });

    // Check if invoice exists
    if (invoice.recordset.length === 0) {
      return res.status(404).json({
        message: 'Invoice not found',
      });
    }

    // Send response
    return res.status(200).json({
      invoice: invoice.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for invoice-related functionalities
