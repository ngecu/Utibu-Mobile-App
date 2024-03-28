import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for creating a new order
export const createOrder = async (req, res) => {
  try {
    const { customerID, medicationID, quantity } = req.body;

    // Generate a unique order ID
    const orderID = v4();

    // Execute SQL query to create the order
    await dbHelper.execute('INSERT INTO Orders (OrderID, CustomerID, MedicationID, Quantity) VALUES (@orderID, @customerID, @medicationID, @quantity)',
      {
        orderID,
        customerID,
        medicationID,
        quantity,
      });

    // Send response
    return res.status(200).json({
      message: 'Order created successfully',
      orderID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for updating an existing order
export const updateOrder = async (req, res) => {
  try {
    const { orderID } = req.params;
    const { quantity } = req.body;

    // Execute SQL query to update the order
    await dbHelper.execute('UPDATE Orders SET Quantity = @quantity WHERE OrderID = @orderID',
      {
        orderID,
        quantity,
      });

    // Send response
    return res.status(200).json({
      message: 'Order updated successfully',
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching all orders
export const getAllOrders = async (req, res) => {
  try {
    // Execute SQL query to fetch all orders
    const orders = await dbHelper.query('SELECT * FROM Orders');

    // Send response
    return res.status(200).json({
      orders: orders.recordset,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching a specific order by its ID
export const getOrder = async (req, res) => {
  try {
    const { orderID } = req.params;

    // Execute SQL query to fetch the order
    const order = await dbHelper.query('SELECT * FROM Orders WHERE OrderID = @orderID', {
      orderID,
    });

    // Check if order exists
    if (order.recordset.length === 0) {
      return res.status(404).json({
        message: 'Order not found',
      });
    }

    // Send response
    return res.status(200).json({
      order: order.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for order-related functionalities
