import mongoose from "mongoose";
import { env } from "../utils/env.js";

export const initMongoConnection = async () => {
    try {
        const user = env("MONGODB_USER");
        const pwd = env("MONGODB_PASSWORD");
        const url = env("MONGODB_URL");
        const db = env("MONGODB_DB");

        await mongoose.connect(`mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster1`);
        console.log("Mongo connection successfully established!");
    } catch (err) { console.log(err); }
    
};