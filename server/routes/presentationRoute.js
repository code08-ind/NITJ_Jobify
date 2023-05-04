import express from 'express';
import cookieParser from 'cookie-parser';
import { editPresentation, addPresentation, getPresentations, getPresentation, deletePresentation } from '../controller/presentation-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addPresentation', addPresentation);
router.put('/presentation/:id', editPresentation);
router.get('/presentations', getPresentations);
router.get('/presentation/:id', getPresentation);
router.delete('/presentation/:id', deletePresentation);

export default router;