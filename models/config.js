const mongose = require('mongoose');

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hellojoker1001:<Hoapro11>@cluster0.rwwgk.mongodb.net/f8_education_dev?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


async function connect(){
    try {
        await mongose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successly!!!!');
    } catch (error) {
        console.log(error);
    }  
}

module.exports = { connect };