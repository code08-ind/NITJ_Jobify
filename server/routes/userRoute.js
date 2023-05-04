import express from 'express';
import cookieParser from 'cookie-parser';
import { userLogin, userLogout } from '../controller/user-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/login', userLogin);
router.get("/logout", userLogout);

export default router;