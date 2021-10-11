
import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ firstname: request.body.username });
        if (exist) {
            return response.status(401).json("User Already Exist");
        }
        const user = request.body;
        const newUser = User(user);
        await newUser.save();
        response.status(200).json("User Successfully Registered")
    } catch (error) {
        console.log("Error", error.message);
    }
}
