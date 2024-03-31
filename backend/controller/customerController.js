import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';
import jwt from 'jsonwebtoken'
import { loginCustomerSchema, registerCustomerSchema } from '../validators/validators.js';
import bcrypt from 'bcrypt'
// Controller for registering a new customer
export const registerCustomer = async (req, res) => {
  try {
    console.log("req body ",req.body);
    const { FirstName, LastName, Email, Phone, Address, Username, Password } = req.body;
    let {error} = registerCustomerSchema.validate(req.body)
    if(error){
      return res.status(404).json({error: error.details[0].message})
  }
    

    // Generate a unique customer ID
    const customerID = v4();
    const hashedPwd = await bcrypt.hash(Password, 5)
    // Execute SQL query to register the customer
    await dbHelper.execute('registerCustomer',
      {
        customerID,
        FirstName,
        LastName,
        Email,
        Phone,
        Address,
        Username,
        Password:hashedPwd,
      });

    // Send response
    return res.status(200).json({
      message: 'Customer registered successfully',
      customerID,
    });
  } catch (error) {
    console.error('Error:', error);
    if(error.originalError.info.message){
      return res.status(500).json({
        error: error.originalError.info.message,
      });
    }
    else{
      return res.status(500).json({
        error:error
      })
    }
   
  }
};

// Controller for logging in a customer
export const loginCustomer = async (req, res) => {
  console.log("req.body ",req.body);
  try {
    
    const { Email, Password } = req.body;

    const {error} = loginCustomerSchema.validate(req.body)
    if(error){
      console.log(error);
      return res.status(404).json({error: error.details[0].message})
  }


    // Execute SQL query to check customer credentials
    let customer =  await dbHelper.execute('loginCustomer',
      {
        Email,
        Password,
      });
      const  existingCustomer = customer.recordset[0]
      console.log(existingCustomer);
      console.log(Password);


      if(customer.recordset[0]?.Email  == Email){
  
      const token = jwt.sign(existingCustomer, process.env.SECRET, {
          expiresIn: '24h'
      }) 

      return res.status(200).json({
          message: "Logged in successfully", token,existingCustomer
      })

      }
      else{
        return res.status(401).json({
          error: "Incorrect email or password"
        });
      }
    
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