import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
    Health_Board: {
        type: String,
        required: true,
    },
    Hospital_Name: {type: String, required: true},
    Location: {type: String, required: true},
    Code: {type: Number, required: true}
})

export const hospitalModel = mongoose.model('Hospital', hospitalSchema, "Hospitals")

export const getHospitalByCode = async (code: Number) => await hospitalModel.findOne({Code: code})