import mongoose from 'mongoose';

const userLoginSchema = new mongoose.Schema({
    nhs_number: {
        type: Number,
        required: true,
        index: true
    },
    email: {type: String, required: true},
    password: {type: String, required: true},
    session_token: {type: String},
})

export const userLoginModel = mongoose.model('Login', userLoginSchema, "Patient_Login")

export const getUserByEmail = async (sentEmail: string) => await userLoginModel.findOne({email: sentEmail})
export const getUserBySessionToken = async (sessionToken: string) => userLoginModel.findOne( {session_token: sessionToken})
