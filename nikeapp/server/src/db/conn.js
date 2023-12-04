/* eslint-disable no-undef */
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Gauravdb:QTPMAMGESVanevYd@cluster0.xbcejaa.mongodb.net/?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Conn Successfull");
}).catch((e)=>{
    console.log(`Connection Err ${e}`);
})
