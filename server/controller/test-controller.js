// to keep all the callback functions in this folder and files
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Email from '../model/emailSchema.js';
import Test from '../model/testLinkSchema.js';

dotenv.config();

/* addTest controller function */
export const addTest = async (request, response) => {
    const test = request.body;
    const newTest = new Test(test);

    try {
        await newTest.save();
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
                subject: 'New Company Test Link Added!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Are Having Test And Test Link Have Been Added To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(newTest);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getTests controller function */
export const getTests = async (request, response) => {
    try {
        const tests = await Test.find({});
        response.status(200).json(tests);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* getTest controller function */
export const getTest = async (request, response) => {
    try {
        const test = await Test.find({ _id: request.params.id });
        response.status(200).json(test);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* editTest controller function */
export const editTest = async (request, response) => {
    let test = request.body;
    let editTest = new Test(test);

    try {
        await Test.updateOne({ _id: request.params.id }, editTest);
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
                subject: 'Company Test Details Edited!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Are Having Test And Then Test Link Details Have Been Edited To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(editTest);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* deleteTest controller function */
export const deleteTest = async (request, response) => {
    try {
        await Test.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Test deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}