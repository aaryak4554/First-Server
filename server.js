const express = require("express");


//body-parser is like the middle person between the data you receive 
//and your server code it helps you take the data that comes with a request 
//and turns it into something that your server can work with easily
const bodyParser = require("body-parser");


//binding a variable (app) to a function (express)
const app = express();


//app.use() is  a way to add something extra to application
//bodyParser.urlencoded works like a translator
//extended:true -->enables server to handle complex data
app.use(bodyParser.urlencoded({extended: true}));

//get() method has 2 parameters: server.get(path, callback function)
// "/" path specifies the root or home page of our application
//callback function tells the server what to do when a request is triggered
app.get("/", function(request,res){
    //console.log(request);
    res.send("hello people");
    //in the send([body]) method the body parameter can be
    // a buffer object, string, array, boolean, object

    //arrow functions
    // app.get("/", (req, res) => {
    //     res.send("GET Request Called")
    // })
});


app.get("/hobbies", function(req,res){
    res.send("i hate poeple");
});


app.get("/about", function(req,res){
    res.send("i am starting to love backend");
});


app.get("/calculator", function(req,res){
    res.sendFile(__dirname + "/calculator.html");
});


app.post("/", function(req,res){
    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var ans=n1+n2;
    res.send("result is: " + ans);
});


app.get("/bmi", function(req,res){
    res.sendFile(__dirname + "/bmi.html");
});


app.post("/bmi", function(req,res){
    var w = parseFloat(req.body.weight);
    var h = parseFloat(req.body.height);
    var ans = w/(h*h);
    res.send("Your BMI is: " + ans + ".");
});


//listen is a method, here we tell app to listen to what is happening on port 3000
//you can choose any other port like 8000 also
//server.listen(port, hostname, backlog, callback fucntion);
app.listen(3000, function(){
    console.log("server started");
});