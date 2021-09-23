import Mongoose from "mongoose";

//referencia de variavel de ambiente na vercel
//https://youtu.be/f7JWDLFhR_c?list=PLX7CeGLB1WK6YbzdJQaIKVXtgM2tHpBSP&t=753

const connection = {};

async function dbConnect(){
    if (connection.isConnected) {
        return;
    }

    const db = await Mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;