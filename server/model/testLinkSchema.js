import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Test schema structure */
const testLinkSchema = new mongoose.Schema({
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
    testLink: {
        type: String,
        required: true,
    }
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
testLinkSchema.plugin(autoIncrement.plugin, 'test');

const test = new mongoose.model('test', testLinkSchema);

export default test;