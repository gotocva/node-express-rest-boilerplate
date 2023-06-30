import express from "express";
import dotenv from 'dotenv';

import { encrypt, decrypt } from "../../../utils/encryption";
import { storeUser, getAllUsers } from "../../../controllers/v1/user";

const env = dotenv.config().parsed;

const v1Api = express.Router();

v1Api.get('/', (req, res) => { res.send('Api v1 working'); });

/**
 * User api routes
 */
v1Api.get('/users', getAllUsers);
v1Api.post('/user', storeUser);


v1Api.get('/about', (req, res) => { res.Response(200, {
    port: env.PORT, env: env.ENV
}) });

// API endpoint for encryption
v1Api.get('/encrypt/:data', (req, res) => {
    const data = req.params.data;
    const encryptedData = encrypt(data);
    res.Response(200, encryptedData);
});

// API endpoint for decryption
v1Api.get('/decrypt/:encryptedData', (req, res) => {
    const encryptedData = req.params.encryptedData;
    const decryptedData = decrypt(encryptedData);
    res.Response(200, decryptedData);
});

module.exports = v1Api;