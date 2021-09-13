import express from "express";
import mongoose from "mongoose";

const PORT = 8000;


const app = express();

const URL='mongodb+srv://brajesh:Brajesh@963@arbor.7tj3x.mongodb.net/ARBOR?retryWrites=true&w=majority'


mongoose.connection = () => {
    mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false})
}

app.listen(PORT, (err) => {
    if (err) {
        console.log(`Error Arbor Server Could Not Run`);

    }
    console.log(`Arbor Backend Running Successful On Port: ${PORT}`)
})
