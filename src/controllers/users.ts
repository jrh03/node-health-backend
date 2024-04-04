import express from "express";
import {getAllPatients} from "../Models/FHIRResource/Patient";

export const getPatients = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getAllPatients();
        return res.status(200).json(users).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}