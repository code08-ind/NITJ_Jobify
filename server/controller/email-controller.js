// to keep all the callback functions in this folder and files
import Email from '../model/emailSchema.js';

/* addEmail controller function */
export const addEmail = async (request, response) => {
    const email = request.body;
    const newEmail = new Email(email);

    try {
        await newEmail.save();
        response.status(201).json(newEmail);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getEmails controller function */
export const getEmails = async (request, response) => {
    try {
        const emails = await Email.find({});
        response.status(200).json(emails);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* getEmail controller function */
export const getEmail = async (request, response) => {
    try {
        const email = await Email.find({ _id: request.params.id });
        response.status(200).json(email);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* editEmail controller function */
export const editEmail = async (request, response) => {
    let email = request.body;
    let editEmail = new Email(email);

    try {
        await Email.updateOne({ _id: request.params.id }, editEmail);
        response.status(201).json(editEmail);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* deleteEmail controller function */
export const deleteEmail = async (request, response) => {
    try {
        await Email.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Email deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}