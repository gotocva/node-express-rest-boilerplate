import express from "express";

import * as UserController from "../../../controllers/v1/user";

const v1Api = express.Router();

v1Api.get('/', (req, res) => { res.send('Api v1 working'); });

/**
 * User api routes
 */
v1Api.get('/users', UserController.getAllUsers);
v1Api.post('/user', UserController.storeUser);



module.exports = v1Api;