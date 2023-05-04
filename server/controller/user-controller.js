// to keep all the callback functions in this folder and files
import User from '../model/userSchema.js';

/* login controller function */
export const userLogin = async (request, response) => {
    const { email, password } = request.body;
    try {
        if (!email || !password) {
            response.status(400).json({ message: "Please Fill All The Details!" });
        }
        const userLogins = await User.findOne({ email: email });

        if (userLogins && (password === userLogins.password)) {
            const token = await userLogins.generateAuthToken();
            response.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 10000000),
                httpOnly: true
            });
            response.status(200).json(userLogins);
        } else if (userLogins === null) {
            response.status(400).json({ message: "Invalid Credentials!" });
        }
    } catch (error) {
        response.status(400).json({ message: "Failed To Sign In!" });
    }
}

/* logout controller function */
export const userLogout = (request, response) => {
    response.clearCookie("jwttoken", { path: "/" })
    response.status(200).send('User Logout');
}