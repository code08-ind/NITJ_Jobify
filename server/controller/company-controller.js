// to keep all the callback functions in this folder and files
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Email from '../model/emailSchema.js';
import Company from '../model/companySchema.js';

dotenv.config();

/* addCompany controller function */
export const addCompany = async (request, response) => {
    const company = request.body;
    const newCompany = new Company(company);

    try {
        await newCompany.save();
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
                subject: 'New Company Visiting!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Have Been Added To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(newCompany);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getCompanies controller function */
export const getCompanies = async (request, response) => {
    try {
        const companies = await Company.find({});
        response.status(200).json(companies);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* getCompany controller function */
export const getCompany = async (request, response) => {
    try {
        const company = await Company.find({ _id: request.params.id });
        response.status(200).json(company);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* editCompany controller function */
export const editCompany = async (request, response) => {
    let company = request.body;
    let editCompany = new Company(company);

    try {
        await Company.updateOne({ _id: request.params.id }, editCompany);
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
                subject: 'Company Details Edited!!! Check The NITJ\'s Jobify Portal',
                html: "<html><body><div><h1 style='color:blue;'>Greetings From TPO NIT Jalandhar!!!</h1><p style='color:red;font-weight:bold;font-size:1.2em;'>New Companies Visiting The Institute For Hiring Have Been Added To The NITJ\'s Jobify Portal. All The Students Are Requested To Visit The Portal To Checkout The Details!!!</p></div></body></html>"
            });
        }
        response.status(201).json(editCompany);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* deleteCompany controller function */
export const deleteCompany = async (request, response) => {
    try {
        await Company.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Company deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}