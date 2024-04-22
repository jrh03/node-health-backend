import mongoose from 'mongoose';

const workingStaff = new mongoose.Schema({
    ShiftStart: {type: Date, required: true},
    ShiftEnd: {type: Date, required: true},
    Hospital: {type: mongoose.Schema.Types.ObjectId, ref: 'Hospital', required: true},
    CurrentPatient: {type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: false},
    Staff: {type: mongoose.Schema.Types.ObjectId, ref: 'Practitioner', required: true},
    Available: {type: Boolean, required: true}
})

export const WorkingStaffModel = mongoose.model('WorkingStaff', workingStaff, "Working_Staff")

export const getStaffByHospital = async (hospital: string) => await WorkingStaffModel.find({Hospital: hospital})

export const getAvailableStaffByHospital = async (hospital: string) => await WorkingStaffModel.find({Hospital: hospital, CurrentPatient: null, Available: true}).populate('Staff', 'name')