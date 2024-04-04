import Patient_Link from "../FHIRModels/Patient_Link";

import Reference from "../FHIRModels/Reference";

import Patient_Communication from "../FHIRModels/Patient_Communication";

import Patient_Contact from "../FHIRModels/Patient_Contact";

import Attachment from "../FHIRModels/Attachment";

import CodeableConcept from "../FHIRModels/CodeableConcept";

import Address from "../FHIRModels/Address";

import ContactPoint from "../FHIRModels/ContactPoint";

import Identifier from "../FHIRModels/Identifier";

import mongoose from "mongoose";

import HumanName from "../FHIRModels/HumanName";

const Patient = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        index: true
    },
    resourceType: {
        type: String,
        required: true
    },
    identifier: {
        type: [Identifier], // Assuming Identifier is a Mongoose schema defined elsewhere
    },
    active: Boolean,
    name: [HumanName], // Assuming HumanName is defined elsewhere
    telecom: [ContactPoint], // Assuming ContactPoint is defined elsewhere
    gender: String,
    birthDate: Date,
    deceasedBoolean: Boolean,
    deceasedDateTime: String,
    address: [Address], // Assuming Address is defined elsewhere
    maritalStatus: CodeableConcept, // Assuming CodeableConcept is defined elsewhere
    multipleBirthBoolean: Boolean,
    multipleBirthInteger: Number,
    photo: [Attachment], // Assuming Attachment is defined elsewhere
    contact: [Patient_Contact], // Assuming Patient_Contact is defined elsewhere
    communication: [Patient_Communication], // Assuming Patient_Communication is defined elsewhere
    generalPractitioner: [Reference], // Assuming Reference is defined elsewhere
    managingOrganization: Reference, // Assuming Reference is defined elsewhere
    link: [Patient_Link] // Assuming Patient_Link is defined elsewhere
});

export const PatientModel = mongoose.model('Patient', Patient, "Patient_Patient");

export const getAllPatients = () => PatientModel.find({});
export const getPatientById = (nhs_no: string) => PatientModel.findOne({id: nhs_no});
