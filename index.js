
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atikurukrahaman_db_user:9DRCqaNpqrBllirm@cluster0.laa2pcw.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const gymSchedule = client.db('gym-schedule').collection('schedule');
    app.post('/schedule',(req,res)=>{
        console.log(req);
    })
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    
    await client.close();
  }
}
run().catch(console.dir);
