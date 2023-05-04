import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Testimonial schema structure */
const testimonialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    company:{
        type:String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    }
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
testimonialSchema.plugin(autoIncrement.plugin, 'testimonial');

const testimonial = new mongoose.model('testimonial', testimonialSchema);

export default testimonial;