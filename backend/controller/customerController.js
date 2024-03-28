import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for registering a new customer
export const registerCustomer = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, address, username, password } = req.body;

    // Check if the username or email is already registered
    const existingCustomer = await dbHelper.query('SELECT * FROM Customers WHERE Username = @username OR Email = @email', {
      username,
      email,
    });

    if (existingCustomer.recordset.length > 0) {
      return res.status(400).json({
        message: 'Username or email already exists',
      });
    }

    // Generate a unique customer ID
    const customerID = v4();

    // Execute SQL query to register the customer
    await dbHelper.execute('INSERT INTO Customers (CustomerID, FirstName, LastName, Email, Phone, Address, Username, Password) VALUES (@customerID, @firstName, @lastName, @email, @phone, @address, @username, @password)',
      {
        customerID,
        firstName,
        lastName,
        email,
        phone,
        address,
        username,
        password,
      });

    // Send response
    return res.status(200).json({
      message: 'Customer registered successfully',
      customerID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for logging in a customer
export const loginCustomer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Execute SQL query to check customer credentials
    const customer = await dbHelper.query('SELECT * FROM Customers WHERE Username = @username AND Password = @password', {
      username,
      password,
    });

    // Check if customer exists and credentials are correct
    if (customer.recordset.length === 0) {
      return res.status(401).json({
        message: 'Invalid username or password',
      });
    }

    // Send response
    return res.status(200).json({
      message: 'Customer logged in successfully',
      customer: customer.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching customer profile
export const getCustomerProfile = async (req, res) => {
  try {
    const { customerID } = req.params;

    // Execute SQL query to fetch customer profile
    const customer = await dbHelper.query('SELECT * FROM Customers WHERE CustomerID = @customerID', {
      customerID,
    });

    // Check if customer exists
    if (customer.recordset.length === 0) {
      return res.status(404).json({
        message: 'Customer not found',
      });
    }

    // Send response
    return res.status(200).json({
      customer: customer.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for updating customer profile
export const updateCustomer = async (req, res) => {
  try {
    const { customerID } = req.params;
    const { firstName, lastName, email, phone, address } = req.body;

    // Execute SQL query to update customer profile
    await dbHelper.execute('UPDATE Customers SET FirstName = @firstName, LastName = @lastName, Email = @email, Phone = @phone, Address = @address WHERE CustomerID = @customerID',
      {
        customerID,
        firstName,
        lastName,
        email,
        phone,
        address,
      });

    // Send response
    return res.status(200).json({
      message: 'Customer profile updated successfully',
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};