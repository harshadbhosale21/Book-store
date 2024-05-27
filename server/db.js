import mongoose from 'mongoose';

const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.Mongo_Url);
        console.log('Database connected Successfully');
    }
    catch (error) {
        console.log('Error Connecting Database')
        console.log(error)
    }
}

export default ConnectDB;