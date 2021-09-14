import express from "express";
import mongoose from "mongoose";

const PORT = 8000;


const app = express();

const URL = 'mongodb://brajesh:Brajesh123@arborserver-shard-00-00.zzbrl.mongodb.net:27017,arborserver-shard-00-01.zzbrl.mongodb.net:27017,arborserver-shard-00-02.zzbrl.mongodb.net:27017/ARBOR?ssl=true&replicaSet=atlas-cj1o7z-shard-0&authSource=admin&retryWrites=true&w=majority';


const Connection = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})
        console.log("Database Connected successfully");
    } catch (error) {
        console.log("Error in connecting DB", error.message);
    }
}

Connection();

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error Arbor Server Could Not Run`);

    }
    console.log(`Arbor Backend Running Successful On Port: ${PORT}`)
})
