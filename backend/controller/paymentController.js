import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for creating a new payment
export const createPayment = async (req, res) => {
  try {
    const { orderID, amount, paymentMethod } = req.body;

    // Generate a unique payment ID
    const paymentID = v4();

    // Execute SQL query to create the payment
    await dbHelper.execute('INSERT INTO Payments (PaymentID, OrderID, Amount, PaymentMethod) VALUES (@paymentID, @orderID, @amount, @paymentMethod)',
      {
        paymentID,
        orderID,
        amount,
        paymentMethod,
      });

    // Send response
    return res.status(200).json({
      message: 'Payment created successfully',
      paymentID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching all payments
export const getAllPayments = async (req, res) => {
  try {
    // Execute SQL query to fetch all payments
    const payments = await dbHelper.query('SELECT * FROM Payments');

    // Send response
    return res.status(200).json({
      payments: payments.recordset,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching a specific payment by its ID
export const getPayment = async (req, res) => {
  try {
    const { paymentID } = req.params;

    // Execute SQL query to fetch the payment
    const payment = await dbHelper.query('SELECT * FROM Payments WHERE PaymentID = @paymentID', {
      paymentID,
    });

    // Check if payment exists
    if (payment.recordset.length === 0) {
      return res.status(404).json({
        message: 'Payment not found',
      });
    }

    // Send response
    return res.status(200).json({
      payment: payment.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for payment-related functionalities
