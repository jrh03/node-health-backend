import express from "express";
import * as argon2 from "argon2";
import {getUserByEmail} from "../Models/userLogin";

export const login = async (req: express.Request, res: express.Response)=> {
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            return res.sendStatus(400);
        }
        const user = await getUserByEmail(email);
        if (!user) {
            return res.sendStatus(400);
        }

        let logged_in = await argon2.verify(user.password, password)

        if (!logged_in) {return res.sendStatus(403)}
        console.log(user)

        user.session_token = await argon2.hash(user._id.toString());
        await user.save()

        res.cookie('NHS-AUTH', user.session_token, { domain: 'localhost', path: '/'})
        return res.status(200).json(user).end()

    }
    catch (error){
        console.log(error);
        return res.sendStatus(400)
    }
}