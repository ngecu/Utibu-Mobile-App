import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for creating order details
export const createOrderDetails = async (req, res) => {
  try {
    const { orderID, medicationID, quantity } = req.body;

    // Generate a unique order detail ID
    const orderDetailID = v4();

    // Execute SQL query to create order details
    await dbHelper.execute('INSERT INTO OrderDetails (OrderDetailID, OrderID, MedicationID, Quantity) VALUES (@orderDetailID, @orderID, @medicationID, @quantity)',
      {
        orderDetailID,
        orderID,
        medicationID,
        quantity,
      });

    // Send response
    return res.status(200).json({
      message: 'Order details created successfully',
      orderDetailID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching order details by order ID
export const getOrderDetailsByOrderID = async (req, res) => {
  try {
    const { orderID } = req.params;

    // Execute SQL query to fetch order details by order ID
    const orderDetails = await dbHelper.query('SELECT * FROM OrderDetails WHERE OrderID = @orderID', {
      orderID,
    });

    // Send response
    return res.status(200).json({
      orderDetails: orderDetails.recordset,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for order details-related functionalities
