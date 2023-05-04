import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Presentation schema structure */
const presentationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    imgLink: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    streams: {
        type: String,
        required: true
    },
    postType: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    pptLink: {
        type: String,
        required: true,
    }
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
presentationSchema.plugin(autoIncrement.plugin, 'presentation');

const presentation = new mongoose.model('presentation', presentationSchema);

export default presentation;