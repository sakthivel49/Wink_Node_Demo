var MongoClient = require("mongodb").MongoClient,
    server = require("mongodb").Server,
    express = require("express"),
    app = express();

var serveraddrss = "localhost",
    serverport ="27017",
    database = "test";
var mongoclient = new MongoClient(new server(serveraddrss,serverport,{native_parser:true}));
var db = mongoclient.db(database);


app.get("/",function(req,res){
    //Open the connection to the server
        db.collection('table1').findOne({}, function (err, doc) {
            if (err) throw err;
            console.dir(doc);
            res.json(doc);
        });
        console.log("Called findone");
});


app.get("*",function(req,res){
    res.send("Page Not Found",404);
});

mongoclient.open(function(err, mongoclient){
    app.listen("1234");
});

//app



