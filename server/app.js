import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import Connection from './db/conn.js';
import cookieParser from 'cookie-parser';
import testRoutes from './routes/testRoute.js';
import userRoutes from './routes/userRoute.js';
import emailRoutes from './routes/emailRoute.js';
import companyRoutes from './routes/companyRoute.js';
import messageRoutes from './routes/messageRoute.js';
import testimonialRoutes from './routes/testimonialRoute.js';
import presentationRoutes from './routes/presentationRoute.js';

/* Setup express App */
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

/* configuring files for json parsing */
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.json());
app.use(cookieParser());

/* importing routes with generalized root routes */
app.use('/', companyRoutes);
app.use('/message', messageRoutes);
app.use('/user', userRoutes);
app.use('/email', emailRoutes);
app.use('/testimonial', testimonialRoutes);
app.use('/test', testRoutes);
app.use('/presentation', presentationRoutes);

/* environment variables */
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

/* running file at PORT */
app.listen(PORT, () => {
    console.log(`Server Running At Port ${PORT}`);
});