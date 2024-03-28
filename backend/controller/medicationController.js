import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for adding a new medication
export const addMedication = async (req, res) => {
  try {
    const { name, description, quantity, price } = req.body;

    // Generate a unique medication ID
    const medicationID = v4();

    // Execute SQL query to add the medication
    await dbHelper.execute('INSERT INTO Medications (MedicationID, Name, Description, Quantity, Price) VALUES (@medicationID, @name, @description, @quantity, @price)',
      {
        medicationID,
        name,
        description,
        quantity,
        price,
      });

    // Send response
    return res.status(200).json({
      message: 'Medication added successfully',
      medicationID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for updating a medication
export const updateMedication = async (req, res) => {
  try {
    const { medicationID } = req.params;
    const { name, description, quantity, price } = req.body;

    // Execute SQL query to update the medication
    await dbHelper.execute('UPDATE Medications SET Name = @name, Description = @description, Quantity = @quantity, Price = @price WHERE MedicationID = @medicationID',
      {
        medicationID,
        name,
        description,
        quantity,
        price,
      });

    // Send response
    return res.status(200).json({
      message: 'Medication updated successfully',
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching all medications
export const getAllMedications = async (req, res) => {
  try {
    // Execute SQL query to fetch all medications
    const medications = await dbHelper.query('SELECT * FROM Medications');

    // Send response
    return res.status(200).json({
      medications: medications.recordset,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching a specific medication
export const getMedication = async (req, res) => {
  try {
    const { medicationID } = req.params;

    // Execute SQL query to fetch the medication
    const medication = await dbHelper.query('SELECT * FROM Medications WHERE MedicationID = @medicationID', {
      medicationID,
    });

    // Check if medication exists
    if (medication.recordset.length === 0) {
      return res.status(404).json({
        message: 'Medication not found',
      });
    }

    // Send response
    return res.status(200).json({
      medication: medication.recordset[0],
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for medication-related functionalities
