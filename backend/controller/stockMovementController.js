import dbHelper from '../dbhelpers/dbhelpers.js';
import { v4 } from 'uuid';

// Controller for recording stock movements
export const recordStockMovement = async (req, res) => {
  try {
    const { medicationID, quantity, movementType } = req.body;

    // Generate a unique movement ID
    const movementID = v4();

    // Execute SQL query to record the stock movement
    await dbHelper.execute('INSERT INTO StockMovements (MovementID, MedicationID, Quantity, MovementType) VALUES (@movementID, @medicationID, @quantity, @movementType)',
      {
        movementID,
        medicationID,
        quantity,
        movementType,
      });

    // Send response
    return res.status(200).json({
      message: 'Stock movement recorded successfully',
      movementID,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Controller for fetching stock movements by medication ID
export const getStockMovementsByMedicationID = async (req, res) => {
  try {
    const { medicationID } = req.params;

    // Execute SQL query to fetch stock movements by medication ID
    const stockMovements = await dbHelper.query('SELECT * FROM StockMovements WHERE MedicationID = @medicationID', {
      medicationID,
    });

    // Send response
    return res.status(200).json({
      stockMovements: stockMovements.recordset,
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({
      error: 'Internal Server Error',
    });
  }
};

// Additional controllers for stock movement-related functionalities
