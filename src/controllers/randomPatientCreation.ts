import {PatientModel} from "../Models/FHIRResource/Patient";
import {CurrentPatientModel} from "../Models/Current_Patient";
import express from "express";

const HOSPITAL_ID = "660a86922af7079e9ec14777"; // Replace with your actual hospital ID

export const randomCheckin = async (req: express.Request, res: express.Response) => {
    try {
        // Fetch all or a large subset of patients
        let patients = await PatientModel.find({}).limit(100); // Adjust according to your needs

        // If fetching all patients is impractical, consider implementing a more efficient selection strategy

        // Shuffle and select fifty patients
        patients = patients.sort(() => 0.5 - Math.random()).slice(0, 50);

        // Create check-in records with random scores for each selected patient
        const checkInPromises = patients.map(patient => {
            const randomScore = Math.floor(Math.random() * 5) + 1; // Random score between 1 and 5
            const newCheckIn = new CurrentPatientModel({
                CheckInTime: new Date(), // Assuming current time for all check-ins
                Hospital: HOSPITAL_ID,
                Patient: patient._id,
                Score: randomScore,
                SeenByDoctor: false
            });

            return newCheckIn.save();
        });

        // Wait for all check-ins to be saved
        await Promise.all(checkInPromises);

        res.status(201).send("Random check-ins for fifty patients successful.");
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
};