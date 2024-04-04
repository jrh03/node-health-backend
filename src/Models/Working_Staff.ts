import mongoose from 'mongoose';

const working_staff = new mongoose.Schema({
    ShiftStart: {type: Date, required: true},
    ShiftEnd: {type: Date, required: true},
    Hospital: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true},
    CurrentPatient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: false},
})

export const WorkingStaffModel = mongoose.model('WorkingStaff', working_staff, "Working_Staff")

export const getStaffByHospital = async (hospital: string) => await WorkingStaffModel.find({Hospital: hospital})

export const getAvailableStaffByHospital = async (hospital: string) => await WorkingStaffModel.find({Hospital: hospital, CurrentPatient: null})