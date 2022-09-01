const mongoose = require("mongoose");
const connect = () =>{
    return mongoose.connect("mongodb+srv://webelight:webelight@cluster0.12waivx.mongodb.net/webelight?retryWrites=true&w=majority")
};
module.exports = connect;