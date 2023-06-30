
import dotenv from 'dotenv';

import app from './config/express';
import { socketService } from "./services/socket";
import { connectDB } from './config/mongoose';

const env = dotenv.config().parsed;


app.use((req, res, next) => {
    const moment = require('moment');
    const currentUtcTime = moment.utc();

    if (req.query.auth) {
        const time1 = new Date(req.query.auth);
        const time2 = new Date(currentUtcTime.format('YYYY-MM-DD HH:mm:ss'));

        console.log({time1, time2});
        const differenceInMilliseconds = Math.abs(time2 - time1);
        const differenceInSeconds = differenceInMilliseconds / 1000;
        const differenceInMinutes = differenceInSeconds / 60;

        console.log({differenceInMinutes});
        if (differenceInMinutes > 2) {
            return res.json({error:"api expired"});
        } else {
            next();
        }
    } else {
        return res.json({error:"api auth required"});
    }
})

// Connect to mongodb database
connectDB();

const http = require('http').createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: env.SOCKET_CORS_ORIGIN || 'http://localhost:3001', // Replace with your allowed origin(s)
      methods: ['GET', 'POST'], // Specify the allowed HTTP methods
      allowedHeaders: ['my-custom-header'], // Specify the allowed custom headers
      credentials: true // Allow credentials (e.g., cookies, authorization headers)
    }
});

// Event handlers and other Socket.IO logic
io.on('connection', (socket) => {
    console.log('A user connected', socket.id);

    socketService(io, socket);
});



http.listen(env.PORT || 8080, () => {
    console.log(`Server listening on port ${env.PORT || 8080}`);
});