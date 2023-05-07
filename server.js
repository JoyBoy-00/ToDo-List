const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var toDoList=["Wake Up","Cook Food","Eat Food"];

app.get("/", function(req,res){
    const today = new Date();
    var options={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var toDay = today.toLocaleDateString("en-US", options);
    
    res.render("index", {toDay : toDay , toDo: toDoList});
})

app.post("/", function (req,res) {
    var toDo = req.body.todoItem;
    toDoList.push(toDo);
    res.redirect("/");
})

app.listen(process.env.PORT||3000, function(){
    console.log("Hello World working on port 3000");
})