import jwt from 'jsonwebtoken';
import User from '../model/userSchema.js';

/* Authentication Function */
const Authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.jwttoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id });

        if (!rootUser) {
            throw new Error('User Not Found');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();
    } catch (error) {
        res.status(401).send('UnAuthorized');
        console.log(error);
    }
}

export default Authenticate;