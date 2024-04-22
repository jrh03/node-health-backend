import mongoose from 'mongoose';

const translation_auth = new mongoose.Schema({
    auth0id: {type: String, required: true},
    id: {type: String, required: true}
})

export const LogInModel = mongoose.model('PatientLogin', translation_auth, "Patient_Login")

export const getPatientByAuth = async (auth: string) => await LogInModel.findOne({auth0id: auth})