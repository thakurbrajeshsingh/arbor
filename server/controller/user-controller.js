
import User from "../model/userSchema.js";

export const userSignup = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
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

export const userLogin = async (request, response) => {
    try {

        const user = await User.findOne({ username: request.body.username, password: request.body.password })
        if (user) {
            return response.status(200).json(`${request.body.username} login successfully`)
        } else {
            return response.status(401).json("Invalid Login");
        }

    } catch (error) {
        console.log("Error")
    }
}