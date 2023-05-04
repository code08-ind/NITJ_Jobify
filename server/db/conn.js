import mongoose from 'mongoose'

/* MongoDB Connection Function */
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-mgjfn44-shard-00-00.kaozflh.mongodb.net:27017,ac-mgjfn44-shard-00-01.kaozflh.mongodb.net:27017,ac-mgjfn44-shard-00-02.kaozflh.mongodb.net:27017/nitjjobify?ssl=true&replicaSet=atlas-pfl8cr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connection established");
    } catch (error) {
        console.log("Error while connecting to Database", error);
    }
}

export default Connection;