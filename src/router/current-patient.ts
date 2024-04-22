import express from "express";
import {checkJwt} from "../middlewares/auth0";
import {requiredScopes} from "express-oauth2-jwt-bearer";
import {waitingPatientsAtHospital} from "../controllers/waitingPatientsAtHospital";
import {availableStaffAtHospital} from "../controllers/AvailableStaffAtHospital";


const checkScopes = requiredScopes('read:staff');


export default (router: express.Router) => {
    router.post('/waiting', checkJwt, checkScopes, async (req, res) => {
        try {
            await waitingPatientsAtHospital(req, res);
        } catch (error) {
            // Make sure to catch any errors and respond appropriately
            console.error(error);
            res.status(500).send("An error occurred while processing your request.");
        }
    });
}