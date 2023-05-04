import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Message schema structure */
const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    year:{
        type:String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
messageSchema.plugin(autoIncrement.plugin, 'message');

const message = new mongoose.model('message', messageSchema);

export default message;