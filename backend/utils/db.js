import mongoose from "mongoose";

const coonectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected succesfully`);
    } catch (error) {
        console.log(error);
    }
}

export default coonectDB