import mongoose from 'mongoose';

const current_patient_schema = new mongoose.Schema({
    CheckInTime: {type: Date, required: true},
    Hospital: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true},
    Patient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true},
    Score: {type: Number, required: true},
    SeenByDoctor: {type: Boolean, required: true}
})

export const CurrentPatientModel = mongoose.model('CurrentPatient', current_patient_schema, "CurrentPatients")

export const getPatientsAtHospital = async (hospital: string) => await CurrentPatientModel.find({Hospital: hospital})