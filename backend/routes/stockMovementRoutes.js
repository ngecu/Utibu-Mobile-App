import express from 'express';
import { recordStockMovement, getStockMovementsByMedicationID } from '../controllers/stockMovementController';

const router = express.Router();

// Record a stock movement
router.post('/', recordStockMovement);

// Get stock movements by medication ID
router.get('/medication/:medicationID', getStockMovementsByMedicationID);

export default router;
