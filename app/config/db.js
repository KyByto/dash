// db.js
import mongoose from 'mongoose';

const dbURI = process.env.MONGODB_URI;


export async function  connectDB   ()  {
    try {
    await    mongoose.connect(dbURI);
console.log("Connected to MongoDB");
    } catch(err) {
        console.log("There was an error" , err);
    }
}
export async function  disconnectDB   ()  {
    try {
        await mongoose.disconnect();
    console.log("Disconnected to MongoDB");
    }
    catch(err) {
        console.log("there was an error : ", err)
    }

}


