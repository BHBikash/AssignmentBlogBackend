import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import hpp from 'hpp';
import * as path from 'path';
import router from './routes/api.js';
import {MONGODB_CONNECTION,PORT,MAX_JSON_SIZE,URL_ENCODED,WEB_CACHE,REQUEST_TIME_LIMIT_TIME,REQUEST_LIMIT_NUMBER} from"./app/config/config.js"
import fileUpload from 'express-fileupload';




const app = express();

//Global Application Middleware

app.use(cors());
app.use(express.json({limit:MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());
app.use(fileUpload({
    limits: {fileSize: 50 * 1024 * 1024},
}));

//Rate Limiter

const limiter=rateLimit({windowsMS:REQUEST_TIME_LIMIT_TIME,max:REQUEST_LIMIT_NUMBER});
app.use(limiter);


//Web Caching

app.set('etag',WEB_CACHE);

//MongoDB Connection
/*
MongoDB will Connect here
 */

//Setting API

app.use("/api",router)


//Set Application Storage

app.use(express.static('storage'))

//Running Blog Backend Project

app.listen(PORT , () => {
    console.log(`Blog App running on port ${PORT}`);
})