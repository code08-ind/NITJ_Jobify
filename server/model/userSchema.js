import jwt from "jsonwebtoken";
import mongoose from "mongoose";

/* User schema to login the user */
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// generate the token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.updateOne();
        return token;
    } catch (error) {
        console.log(error);
    }
}

const user = new mongoose.model('user', userSchema);

export default user;