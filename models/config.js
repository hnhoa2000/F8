const mongose = require('mongoose');

const uri = "mongodb+srv://hellojoker1001:Hoapro11@cluster0.rwwgk.mongodb.net/f8_education_dev?retryWrites=true&w=majority";

async function connect(){
    try {
        await mongose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('connect successly!!!!');
    } catch (error) {
        console.log(error);
    }  
}

module.exports = { connect };