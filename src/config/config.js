import dotenv from "dotenv";

dotenv.config() //in env files never space 

const config = {
    port: process.env.PORT,
    mongoDBurl:process.env.mongoDBurl || "",
};

export default config;