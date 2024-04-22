import Address from "../FHIRModels/Address";

import ContactPoint from "../FHIRModels/ContactPoint";

import Identifier from "../FHIRModels/Identifier";

import mongoose from "mongoose";

import HumanName from "../FHIRModels/HumanName";

// Missing some FHIR data such as qualification and communication. Forked from generated patient file.


const Practitioner = new mongoose.Schema({
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
});

export const PractitionerModel = mongoose.model('Practitioner', Practitioner, "Staff_Practitioner");

export const getAllPractitioner = () => PractitionerModel.find({});
