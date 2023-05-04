/* importing axios to use requests for running backend at frontend */
import axios from 'axios';

/* backend url to access the backends */
const URL = "https://nitj-jobify-backend.onrender.com";

/* add company function */
export const addCompany = async (data) => {
    try {
        return await axios.post(`${URL}/addCompany`, data);
    } catch (error) {
        console.log("Error while adding company: ", error);
    }
}

/* add message function */
export const addMessage = async (data) => {
    try {
        return await axios.post(`${URL}/message/addMessage`, data);
    } catch (error) {
        console.log("Error while adding Message: ", error);
    }
}

/* add testimonial function */
export const addTestimonial = async (data) => {
    try {
        return await axios.post(`${URL}/testimonial/addTestimonial`, data);
    } catch (error) {
        console.log("Error while adding testimonial: ", error);
    }
}

/* add test function */
export const addTest = async (data) => {
    try {
        return await axios.post(`${URL}/test/addTest`, data);
    } catch (error) {
        console.log("Error while adding test: ", error);
    }
}

/* add presentation function */
export const addPresentation = async (data) => {
    try {
        return await axios.post(`${URL}/presentation/addPresentation`, data);
    } catch (error) {
        console.log("Error while adding presentation: ", error);
    }
}

/* add email function */
export const addEmail = async (data) => {
    try {
        return await axios.post(`${URL}/email/addEmail`, data);
    } catch (error) {
        console.log("Error while adding Email: ", error);
    }
}

/* get companies function */
export const getCompanies = async () => {
    try {
        return await axios.get(`${URL}/companies`);
    } catch (error) {
        console.log("Error while calling companies: " + error);
    }
}

/* get messages function */
export const getMessages = async () => {
    try {
        return await axios.get(`${URL}/message/messages`);
    } catch (error) {
        console.log("Error while calling messages: " + error);
    }
}

/* get testimonials function */
export const getTestimonials = async () => {
    try {
        return await axios.get(`${URL}/testimonial/testimonials`);
    } catch (error) {
        console.log("Error while calling testimonials: " + error);
    }
}

/* get tests function */
export const getTests = async () => {
    try {
        return await axios.get(`${URL}/test/tests`);
    } catch (error) {
        console.log("Error while calling tests: " + error);
    }
}

/* get presentations function */
export const getPresentations = async () => {
    try {
        return await axios.get(`${URL}/presentation/presentations`);
    } catch (error) {
        console.log("Error while calling presentations: " + error);
    }
}

/* get emails function */
export const getEmails = async () => {
    try {
        return await axios.get(`${URL}/email/emails`);
    } catch (error) {
        console.log("Error while calling emails: " + error);
    }
}

/* get company function */
export const getCompany = async (id) => {
    try {
        return await axios.get(`${URL}/company/${id}`);
    } catch (error) {
        console.log("Error while calling company: " + error);
    }
}

/* get email function */
export const getEmail = async (id) => {
    try {
        return await axios.get(`${URL}/email/email/${id}`);
    } catch (error) {
        console.log("Error while calling email: " + error);
    }
}

/* get test function */
export const getTest = async (id) => {
    try {
        return await axios.get(`${URL}/test/test/${id}`);
    } catch (error) {
        console.log("Error while calling test: " + error);
    }
}

/* get presentation function */
export const getPresentation = async (id) => {
    try {
        return await axios.get(`${URL}/presentation/presentation/${id}`);
    } catch (error) {
        console.log("Error while calling presentation: " + error);
    }
}

/* get testimonial function */
export const getTestimonial = async (id) => {
    try {
        return await axios.get(`${URL}/testimonial/testimonial/${id}`);
    } catch (error) {
        console.log("Error while calling testimonial: " + error);
    }
}

/* edit company function */
export const editCompany = async (company, id) => {
    try {
        return await axios.put(`${URL}/company/${id}`, company);
    } catch (error) {
        console.log("Error while editing company: " + error);
    }
}

/* edit email function */
export const editEmail = async (email, id) => {
    try {
        return await axios.put(`${URL}/email/email/${id}`, email);
    } catch (error) {
        console.log("Error while editing email: " + error);
    }
}

/* edit testimonial function */
export const editTestimonial = async (testimonial, id) => {
    try {
        return await axios.put(`${URL}/testimonial/testimonial/${id}`, testimonial);
    } catch (error) {
        console.log("Error while editing testimonial: " + error);
    }
}
/* edit test function */
export const editTest = async (test, id) => {
    try {
        return await axios.put(`${URL}/test/test/${id}`, test);
    } catch (error) {
        console.log("Error while editing test: " + error);
    }
}
/* edit presentation function */
export const editPresentation = async (presentation, id) => {
    try {
        return await axios.put(`${URL}/presentation/presentation/${id}`, presentation);
    } catch (error) {
        console.log("Error while editing presentation: " + error);
    }
}

/* delete company function */
export const deleteCompany = async (id) => {
    try {
        return await axios.delete(`${URL}/company/${id}`);
    } catch (error) {
        console.log("Error while deleting company: " + error);
    }
}

/* delete message function */
export const deleteMessage = async (id) => {
    try {
        return await axios.delete(`${URL}/message/message/${id}`);
    } catch (error) {
        console.log("Error while deleting message: " + error);
    }
}

/* delete email function */
export const deleteEmail = async (id) => {
    try {
        return await axios.delete(`${URL}/email/email/${id}`);
    } catch (error) {
        console.log("Error while deleting email: " + error);
    }
}

/* delete testimonial function */
export const deleteTestimonial = async (id) => {
    try {
        return await axios.delete(`${URL}/testimonial/testimonial/${id}`);
    } catch (error) {
        console.log("Error while deleting testimonial: " + error);
    }
}

/* delete test function */
export const deleteTest = async (id) => {
    try {
        return await axios.delete(`${URL}/test/test/${id}`);
    } catch (error) {
        console.log("Error while deleting test: " + error);
    }
}

/* delete presentation function */
export const deletePresentation = async (id) => {
    try {
        return await axios.delete(`${URL}/presentation/presentation/${id}`);
    } catch (error) {
        console.log("Error while deleting presentation: " + error);
    }
}