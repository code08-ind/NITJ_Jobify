import express from 'express';
import cookieParser from 'cookie-parser';
import { editCompany, addCompany, getCompanies, getCompany, deleteCompany } from '../controller/company-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addCompany', addCompany);
router.put('/company/:id', editCompany);
router.get('/companies', getCompanies);
router.get('/company/:id', getCompany);
router.delete('/company/:id', deleteCompany);

export default router;