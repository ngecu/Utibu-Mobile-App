import express from 'express';
import { createMedication, getMedicationByID, updateMedication, deleteMedication } from '../controllers/medicationController';

const router = express.Router();

// Create a new medication
router.post('/', createMedication);

// Get a medication by ID
router.get('/:medicationID', getMedicationByID);

// Update a medication
router.put('/:medicationID', updateMedication);

// Delete a medication
router.delete('/:medicationID', deleteMedication);

export default router;
