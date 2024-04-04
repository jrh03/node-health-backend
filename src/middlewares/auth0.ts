import express from 'express';
import {auth} from "express-oauth2-jwt-bearer";


// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
export const checkJwt =
    auth({
    audience: 'https://patientms/api',
    issuerBaseURL: `https://dev-6qmiyqdg4nui5ywh.eu.auth0.com/`,
});



