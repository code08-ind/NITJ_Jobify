// to keep all the callback functions in this folder and files
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Email from '../model/emailSchema.js';
import Presentation from '../model/presentationSchema.js';

dotenv.config();

/* addPresentation controller function */
export const addPresentation = async (request, response) => {
    const presentation = request.body;
    const newPresentation = new Presentation(presentation);

    try {
        await newPresentation.save();
        let data = [];
        const emails = await Email.find({});
        for (let i = 0; i < emails.length; i++) {
            data.push(emails[i].email);
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
        send();
        async function send() {
            const result = await transporter.sendMail({
                from: data[0],
                to: data,
                subject: 'New Company Presentation Added!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Are Having Ppt About Company And Have Been Added To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(newPresentation);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getPresentations controller function */
export const getPresentations = async (request, response) => {
    try {
        const presentations = await Presentation.find({});
        response.status(200).json(presentations);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* getPresentation controller function */
export const getPresentation = async (request, response) => {
    try {
        const presentation = await Presentation.find({ _id: request.params.id });
        response.status(200).json(presentation);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* editPresentation controller function */
export const editPresentation = async (request, response) => {
    let presentation = request.body;
    let editPresentation = new Presentation(presentation);

    try {
        await Presentation.updateOne({ _id: request.params.id }, editPresentation);
        let data = [];
        const emails = await Email.find({});
        for (let i = 0; i < emails.length; i++) {
            data.push(emails[i].email);
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.USER,
                pass: process.env.PASS
            }
        });
        send();
        async function send() {
            const result = await transporter.sendMail({
                from: data[0],
                to: data,
                subject: 'Company Presentation Details Edited!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Are Having Ppt About Company And The Details Have Been Edited To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(editPresentation);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* deletePresentation controller function */
export const deletePresentation = async (request, response) => {
    try {
        await Presentation.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Presentation deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}