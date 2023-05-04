// to keep all the callback functions in this folder and files
import Testimonial from '../model/testimonialSchema.js';

/* addTestimonial controller function */
export const addTestimonial = async (request, response) => {
    const testimonial = request.body;
    const newTestimonial = new Testimonial(testimonial);

    try {
        await newTestimonial.save();
        response.status(201).json(newTestimonial);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* getTestimonials controller function */
export const getTestimonials = async (request, response) => {
    try {
        const testimonials = await Testimonial.find({});
        response.status(200).json(testimonials);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* getTestimonial controller function */
export const getTestimonial = async (request, response) => {
    try {
        const testimonial = await Testimonial.find({ _id: request.params.id });
        response.status(200).json(testimonial);
    } catch (error) {
        response.status(404).json({ message: error.message });
    }
}

/* editTestimonial controller function */
export const editTestimonial = async (request, response) => {
    let testimonial = request.body;
    let editTestimonial = new Testimonial(testimonial);

    try {
        await Testimonial.updateOne({ _id: request.params.id }, editTestimonial);
        response.status(201).json(editTestimonial);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

/* deleteTestimonial controller function */
export const deleteTestimonial = async (request, response) => {
    try {
        await Testimonial.deleteOne({ _id: request.params.id });
        response.status(200).json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}