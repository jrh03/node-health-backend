import express from "express";
import {checkJwt} from "../middlewares/auth0";
import {requiredScopes} from "express-oauth2-jwt-bearer";
import {waitinglist} from "../controllers/waitinglist";
import {available_staff} from "../controllers/available_staff";


const checkScopes = requiredScopes('read:staff');


export default (router: express.Router) => {
    router.post('/waiting', checkJwt, checkScopes, async (req, res) => {
        try {
            await waitinglist(req, res);
        } catch (error) {
            // Make sure to catch any errors and respond appropriately
            console.error(error);
            res.status(500).send("An error occurred while processing your request.");
        }
    });
}