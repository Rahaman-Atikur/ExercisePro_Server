const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://atikurukrahaman_db_user:9DRCqaNpqrBllirm@cluster0.laa2pcw.mongodb.net/?appName=Cluster0";

const express = require('express');

const cors = require('cors');
const app = express();

const port = 3000;

app.use(express.json());
app.use(cors());

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
    app.post('/schedule', async (req, res) => {
      const data = req.body;
      const result = await gymSchedule.insertOne(data);
      res.send({ message: "data inserted successfully", data: result });
    })
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    })
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);
