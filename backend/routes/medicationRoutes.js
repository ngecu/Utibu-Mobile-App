import express from 'express';
import { addMedication, getMedicationByID, updateMedication } from '../controller/medicationController.js';

const router = express.Router();

// Create a new medication
router.post('/', addMedication);

// Get a medication by ID
router.get('/:medicationID', getMedicationByID);

// Update a medication
router.put('/:medicationID', updateMedication);

// Delete a medication
// router.delete('/:medicationID', deleteMedication);

export default router;
