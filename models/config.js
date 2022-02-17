const mongose = require('mongoose');


async function connect(){
    try {
        await mongose.connect(process.env.DATABASE_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successly!!!!');
    } catch (error) {
        console.log(error);
    }  
}

module.exports = { connect };