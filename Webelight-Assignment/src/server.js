const app = require("./index");
const connect = require("./configs/db")
require("dotenv").config();
app.listen(process.env.PORT || 5000, async() =>{
    try {
        await connect();
    } catch (error) {
        console.log(err);
    }
    console.log("listning on port 5000");
})