import express from 'express';
import cookieParser from 'cookie-parser';
import { addMessage, getMessages, deleteMessage } from '../controller/message-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addMessage', addMessage);
router.get('/messages', getMessages);
router.delete('/message/:id', deleteMessage);

export default router;