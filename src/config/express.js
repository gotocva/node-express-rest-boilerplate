import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { xssPrevention } from '../utils/xss';
import { globalErrorHandler } from '../utils/error';
import { globalResponseHandler } from '../utils/response';

const app = express();
const env = dotenv.config().parsed;

// Middleware for parsing JSON request bodies
app.use(express.json());

// xss prevention sanitize inputs 
app.use(xssPrevention);

// Apply rate limiting middleware
const API_RATE_LIMIT_TIME = process.env.API_RATE_LIMIT_TIME || env.API_RATE_LIMIT_TIME || 15;
const API_RATE_LIMIT = process.env.API_RATE_LIMIT || env.API_RATE_LIMIT || 100;

const rateLimiter = rateLimit({
    windowMs: API_RATE_LIMIT_TIME * ( 60 * 1000 ), // 15 minutes
    max: API_RATE_LIMIT, // Limit each IP to 100 requests per windowMs
});

app.use(rateLimiter);

// Apply Helmet middleware
app.use(helmet());

// Enable Content Security Policy
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
    },
  })
);

app.use(globalResponseHandler);

// routes import 

import v1Api from '../routes/api/v1/index';


// routes injection

app.use('/api/v1/', v1Api);

app.get('/api/users', (req, res) => {
  res.json({ users: ['John', 'Jane', 'Alice'] });
});
// This middleware should be defined after all other route and middleware definitions.
app.use(globalErrorHandler);

module.exports = app;