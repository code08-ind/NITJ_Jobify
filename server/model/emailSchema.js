import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

/* Email schema to have structures of emails */
const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    }
});

/* To change the Id to autoincrement form */
autoIncrement.initialize(mongoose.connection);
emailSchema.plugin(autoIncrement.plugin, 'email');

const email = new mongoose.model('email', emailSchema);

export default email;