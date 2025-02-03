import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cors from "cors";

import { validationResult } from 'express-validator';

const app = express();  

app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://Raf_Avetyan:rafik210907@nftmarketplacecluster.mm5dkin.mongodb.net/blog?retryWrites=true&w=majority&appName=nftmarketplacecluster")
   .then(() => {
      app.listen(PORT, (err) => {
         if (err) {
            return console.log(err);
         }
         
         console.log(`Server running on port ${PORT}`);
      })
   })
   .then(() => console.log("DB successfuly connect!"))
   .catch((err) => console.error(err))