import express from "express";
import {getAvailableStaffByHospital} from "../Models/Working_Staff";

export const availableStaffAtHospital = async (req: express.Request, res: express.Response)=>  {
    try {
        const {Hospital} = req.body;

        // Check if both patient and hospital exist
        if (!Hospital) {
            return res.status(404).send("Patient or hospital not found");
        }

        console.log("HERE");
        return res.status(200).json(await getAvailableStaffByHospital(Hospital._id)).end();

    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}