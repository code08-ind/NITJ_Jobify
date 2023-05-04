import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Company Schema To Define the main structure Of Project */
const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    types: {
        type: String,
        required: true
    },
    eligibility: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    streams: {
        type: String,
        required: true
    },
    jdLink: {
        type: String,
        required: true
    },
    applyLink: {
        type: String,
        required: true
    },
    postType: {
        type: String,
        required: true
    },
    packages: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    imgLink: {
        type: String,
        required: true
    },
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
companySchema.plugin(autoIncrement.plugin, 'companie');

const companie = new mongoose.model('companie', companySchema);

export default companie;