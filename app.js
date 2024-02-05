const express = require("express");
const port = 3000
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("stu-main")
})
app.listen(port,()=>{
    console.log("server is running")
})