import express from "express";
const router = express.Router();
import * as blogController from "../app/controllers/blogController.js";
import {deleteblog, readblog, updateblog} from "../app/controllers/blogController.js";

//Create Route

router.post("/createblog",blogController.createblog);

//Read Route

router.get("/readblog",blogController.readblog);

//Update Route

router.put("/updateblog",blogController.updateblog);

//Delete Route

router.delete("/deleteblog",blogController.deleteblog);

export default router;






