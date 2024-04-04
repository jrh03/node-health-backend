import express from "express";
import {randomCheckin} from "../controllers/patient_creation";

export default (router: express.Router) => {
    router.post('/create', async (req, res) => {
        try {
            await randomCheckin(req, res);
            } catch (error) {
            // Make sure to catch any errors and respond appropriately
            console.error(error);
            res.status(500).send("An error occurred while processing your request.");
        }
    });
}