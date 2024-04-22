import express from "express";
import {getHospitalByCode} from "../Models/Hospital";
import {getPatientById} from "../Models/FHIRResource/Patient";
import {getPatientByAuth} from "../Models/Patient_Login";
import {CurrentPatientModel} from "../Models/Current_Patient";

export const checkInPatient = async (req: express.Request, res: express.Response)=>  {
    try {
        const {CheckInTime, Hospital, Score} = req.body;
        // @ts-ignore
        const auth_id = req.auth.payload.sub



        const nhs_id = await getPatientByAuth(auth_id).then((patient) =>  patient.id)

        const patient = await getPatientById(nhs_id);
        console.log(patient._id)

        // Check if both patient and hospital exist
        if (!patient) {
            return res.status(404).send("Patient or hospital not found");
        }

        // Create a new CurrentPatient record
        const newCheckIn = new CurrentPatientModel({
            CheckInTime: CheckInTime,
            Hospital: Hospital._id, // Assuming hospital._id is the ObjectId
            Patient: patient._id, // Assuming patient._id is the ObjectId
            Score: Score,
            SeenByDoctor: false // Assuming default value is false
        });

        // Save the new record
        await newCheckIn.save();

        // Send a success response
        res.status(201).send("Check-in successful");
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}