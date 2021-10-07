import { request, response } from "express";
import User from "../model/userSchema.js";

export const userSignup = async (request,response) => {
    try {
        const exist = User.findOne({ fistname: request.body.username });
        if (exist) {
            return response.status(401).response("User Already Exist");
        }
        const user = request.body;
        const newUser = User(user);
        await newUser.save();
        response.status(200).json("User Successfully Registered")
    } catch (error) {
        console.log("Error", error.message);
    }
}

7608080897