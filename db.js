const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

//ye mongodb se connect karne ki uri hai
const mongoURI = "mongodb+srv://faizan:1234@cluster0.e4p86uw.mongodb.net/inotebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI ,{ useNewUrlParser: true, useUnifiedTopology: true }).then( ()=>{
        console.log("Connected to mongo Successfully");
    }).catch((e)=>{
     console.log(e)
    })
}

module.exports = connectToMongo; 


// mongodb://localhost:27017/inotebook?read Preference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false
// mongodb+srv://faizan:1234@cluster0.e4p86uw.mongodb.net/test
