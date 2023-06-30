

import mongoose from 'mongoose';
import dotenv from 'dotenv';

const env = dotenv.config().parsed;

export const connectDB = () => {

    // mongoose.connect(env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    if (env.MONGODB_FULL_URI != '' && env.MONGODB_FULL_URI != undefined) {
        mongoose.connect(env.MONGODB_FULL_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    } else {
        if (env.MONGODB_PASSWORD == '' || env.MONGODB_PASSWORD == undefined) {
            console.log(`mongodb://${env.HOST}/${env.MONGODB_DB_NAME}`)
            mongoose.connect(`mongodb://${env.HOST}/${env.MONGODB_DB_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });
        } else {
            const URI = `mongodb://${env.MONGODB_USERNAME}:${env.MONGODB_PASSWORD}@${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DB_NAME}?authMechanism=DEFAULT&authSource=admin`
            mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
        }
    }
    
    // when successfully connected
    mongoose.connection.on('connected', () => {
        console.log('Mongodb successfully connected');
    });

    // if the connection throws an error
    mongoose.connection.on("error", (err) => {
        // if you get error for the first time when this gets started make sure to run mongodb
        console.log('Mongodb connection failed', err);
    });
    
    // when the connection is disconnected
    mongoose.connection.on("disconnected", () => {
        console.log('Mongodb disconnected');
    });
}