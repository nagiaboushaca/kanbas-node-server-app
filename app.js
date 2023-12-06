import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import UserRoutes from './users/routes.js';
import cors from "cors";
import mongoose from "mongoose";
import session from 'express-session';
mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
import "dotenv/config";

// const express = require('express')
const app = express()
app.use(cors({   credentials: true,
        origin: "http://localhost:3000",
    }));
// const sessionOptions = {
//     secret: "any string",
//     resave: false,
//     saveUninitialized: false,
// };
// app.use(
//     session(sessionOptions)
// );
      
app.use(express.json());
UserRoutes(app)
CourseRoutes(app)
ModuleRoutes(app)
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000);