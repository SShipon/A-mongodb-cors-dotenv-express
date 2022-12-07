const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express()

//middleware

app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jgbqt.mongodb.net/?retryWrites=true&w=majority`;
//console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
   try{
    //users collection
    const productCollection = client.db("services_collection").collection('products')
   
    //appointment get code 
  app.get('/products', async(req, res)=>{
    const query = {};
    const options = await productCollection.find(query).toArray();
    res.send(options)
  });


  app.post('products',async(req, res)=>{
    const user = {}
   
  })

   }

   finally{
   // console.log('hello')
   }
}

run().catch(console.dir);

//console.log code 

app.get('/', async(req, res) => {
  res.send('doctor saver site running ')
})


//listening prot and server running
app.listen(port, () => {
  console.log(`server listening on port running ${port}`)
})

