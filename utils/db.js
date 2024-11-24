import mongoose from 'mongoose';


export default async function  db() {
    if (mongoose?.connections?.readyState>=1) {
        // await mongoose.connect(process.env.MONGODB_URI, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        // });
        return;
    }

    try {
        await mongoose.connect(process.env.DATABASE);
        console.log('Connected to MongoDB ✅');
    } catch (error) {
        console.log(error);
        console.log('Error connecting to MongoDB ❌');
    }

    // return mongoose.connection;
}