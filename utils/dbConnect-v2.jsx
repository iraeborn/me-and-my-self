const {MongoClient} = require('mongodb');

//process.env.MONGO_URI

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://iraeborn:lohr*9526@cluster0.zngfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";//process.env.MONGO_URI;
    //const uri = process.env.MONGO_URI;

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

export default main;
//main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};


