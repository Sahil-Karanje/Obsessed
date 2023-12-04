const mongoose = require('mongoose');
const mongoDBURL= "mongodb+srv://sahil:obsessed@cluster0.mszur3d.mongodb.net/obsessed";

const connect = mongoose.connect(mongoDBURL,{ useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("databse connected !");
}).catch((error)=>{
    console.log(error)
});

module.exports = connect;