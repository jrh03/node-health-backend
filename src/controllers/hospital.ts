import express from "express";
import {getHospitalByCode} from "../Models/Hospital";
import {toNumber} from "lodash";

export const getCurrentHospital = async (req: express.Request, res: express.Response) => {
    try {
        const {code} = req.params;
        const users = await getHospitalByCode(toNumber(code));
        return res.status(200).json(users).end();
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}