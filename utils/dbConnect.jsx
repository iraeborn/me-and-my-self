import Mongoose from "mongoose";

//referencia de variavel de ambiente na vercel
//https://youtu.be/f7JWDLFhR_c?list=PLX7CeGLB1WK6YbzdJQaIKVXtgM2tHpBSP&t=753

const connection = {};

async function dbConnect(){
    if (connection.isConnected) {
        return;
    }
    const uri = "mongodb+srv://iraeborn:lohr*9526@cluster0.zngfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    //process.env.MONGO_URI

    const db = await Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);
}

export default dbConnect;