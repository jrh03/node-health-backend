import express from "express";
import {getCurrentHospital} from "../controllers/hospital";

export default (router: express.Router) => {
    router.get('/hospital/:code', getCurrentHospital);
}