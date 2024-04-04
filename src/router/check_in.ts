import express from "express";
import {checkJwt} from "../middlewares/auth0";
import {requiredScopes} from "express-oauth2-jwt-bearer";
import {checkin} from "../controllers/checkin";


const checkScopes = requiredScopes('read:self');


export default (router: express.Router) => {
    router.post('/checkin', checkJwt, checkScopes, async (req, res) => {
        try {
            // Directly await the asynchronous operation
            await checkin(req, res);
        } catch (error) {
            // Make sure to catch any errors and respond appropriately
            console.error(error);
            res.status(500).send("An error occurred while processing your request.");
        }
    });
}