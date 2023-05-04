import express from 'express';
import cookieParser from 'cookie-parser';
import { editTest, addTest, getTests, getTest, deleteTest } from '../controller/test-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addTest', addTest);
router.put('/test/:id', editTest);
router.get('/tests', getTests);
router.get('/test/:id', getTest);
router.delete('/test/:id', deleteTest);

export default router;