import express from "express";
import users from "./check_in";
import hospital from "./hospital";
import check_in from "./check_in";
import waitinglist from "./waiting_patients";
import patient_create from "./patient_create";
const router = express.Router();

export default (): express.Router => {
    users(router);
    hospital(router);
    check_in(router)
    waitinglist(router)
    patient_create(router)
    return router
};