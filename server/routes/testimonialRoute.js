import express from 'express';
import cookieParser from 'cookie-parser';
import { editTestimonial, addTestimonial, getTestimonials, getTestimonial, deleteTestimonial } from '../controller/testimonial-controller.js';

/* Using express router for routing */
const router = express.Router();

/* for cookie parsing */
router.use(cookieParser());

/* routes */
router.post('/addTestimonial', addTestimonial);
router.put('/testimonial/:id', editTestimonial);
router.get('/testimonials', getTestimonials);
router.get('/testimonial/:id', getTestimonial);
router.delete('/testimonial/:id', deleteTestimonial);

export default router;