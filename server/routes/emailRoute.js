import express from 'express';
import cookieParser from 'cookie-parser';
import { editEmail, addEmail, getEmails, getEmail, deleteEmail } from '../controller/email-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addEmail', addEmail);
router.put('/email/:id', editEmail);
router.get('/emails', getEmails);
router.get('/email/:id', getEmail);
router.delete('/email/:id', deleteEmail);

export default router;