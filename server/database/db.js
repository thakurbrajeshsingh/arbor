import mongoose from "mongoose";




const Connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@arborserver-shard-00-00.zzbrl.mongodb.net:27017,arborserver-shard-00-01.zzbrl.mongodb.net:27017,arborserver-shard-00-02.zzbrl.mongodb.net:27017/ARBOR?ssl=true&replicaSet=atlas-cj1o7z-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database Connected successfully");
    } catch (error) {
        console.log("Error in connecting DB", error.message);
    }
}


export default Connection;