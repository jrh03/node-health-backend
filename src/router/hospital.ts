import express from "express";
import {getCurrentHospital} from "../controllers/hospitalByCode";

export default (router: express.Router) => {
    router.get('/hospital/:code', getCurrentHospital);
}