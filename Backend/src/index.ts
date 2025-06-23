import  express,{Express}  from "express";
import  mongoose  from "mongoose";
import dotenv from 'dotenv'
import financialRecordRouter from "./routes/financial-records"
import cors from "cors";

dotenv.config()


const app:Express=express();
const port=process.env.PORT ||5000;
const MONGO_URI=process.env.MONGODB_URI||'';

app.use(express.json())
app.use(cors())

 mongoose
 .connect(MONGO_URI)
 .then(()=>{console.log("CONNECTED TO MONGODB")})
 .catch((err) => {
    console.error("Failed to Connect to MongoDB", err);
    process.exit(1); // Exit if DB connection fails
  });
 app.use("/financial-records",financialRecordRouter)

 app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
 })