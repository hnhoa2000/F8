const mongose = require('mongoose');


async function connect(){
    try {
        await mongose.connect('mongodb://localhost:27017/f8_education_dev',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successly!!!!');
    } catch (error) {
        console.log(error);
    }  
}

module.exports = { connect };