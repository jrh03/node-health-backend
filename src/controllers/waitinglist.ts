import {CurrentPatientModel, getPatientsAtHospital} from "../Models/Current_Patient";
import express from "express";

export const waitinglist = async (req: express.Request, res: express.Response)=>  {
    try {
        const {Hospital} = req.body;
        console.log(Hospital);

        // Check if both patient and hospital exist
        if (!Hospital) {
            return res.status(404).send("Patient or hospital not found");
        }
        const data = await getPatientsAtHospital(Hospital._id);
        console.log(data);

        return res.status(200).json(data).end();

    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}