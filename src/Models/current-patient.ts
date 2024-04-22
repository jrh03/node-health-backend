import mongoose from 'mongoose';
import {ObjectId} from "mongodb";

const current_patient_schema = new mongoose.Schema({
    CheckInTime: {type: Date, required: true},
    Hospital: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true},
    Patient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true},
    Score: {type: Number, required: true},
    SeenByDoctor: {type: Boolean, required: true},
    Notes: {type: String, required: false}
})

export const CurrentPatientModel = mongoose.model('CurrentPatient', current_patient_schema, "CurrentPatients")

export const getPatientsAtHospital = async (hospital: string) => await CurrentPatientModel.find({Hospital: hospital}).populate('Patient', 'name').sort({Score: -1})
export const getPatientsAheadOfPatient = async (hospital: string, patient: ObjectId) => {
    const patient_file = await CurrentPatientModel.findOne({Hospital: hospital, Patient: patient})
    return CurrentPatientModel.countDocuments({
        Hospital: hospital,
        $or: [{Score: {$gt: patient_file.Score}}, {Score: patient_file.Score}, {_id: {$lt: patient_file._id}}]
    });
}

export const checkedIn = async (patient: ObjectId) => await CurrentPatientModel.findOne({Patient: patient}).populate('Hospital')