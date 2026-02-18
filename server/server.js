import { connectDB } from "./config/db.js";
import app from "./app.js";

connectDB();

const PORT = process.env.PORT||4000;

const server = app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

process.on("unhandledRejection",(err)=>{
    console.error(`Unhandler Rejection: ${err.message}`);
    server.close(() => process.exit(1));
})
process.on("uncaughtException",(err)=>{
    console.error(`Uncaught Exception: ${err.message}`);
    server.close(() => process.exit(1));
})
export default server;