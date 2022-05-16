const express = require("express");
const bodyparser = require("body-parser");
const res = require("express/lib/response");

const app = express(); 

let items = ["cook food","make food", "buy food"];
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req, res){
    let today = new Date();
    let options ={
        weekday: "long",
        day: "numeric",
        month: "long",
    };

    let day = today.toLocaleDateString("en-us",options);
  
    

    res.render("list",{
        ListTitle: day, newlistitems: items
    });

    app.post("/",function(req,res){
        let item = req.body.newitem;
        items.push(item);
      // console.log(item);
      res.redirect("/");
    });
    
    app.get("/work",function(req,res){
        res.render("list",{ListTitle: "worklist",newlistitems: workitems});

});

   
    app.post("/work",function (req,res) {
        let item = req.body.newitem;
        workitems.push(item);
        res.redirect("/work");
    })  

    })

app.listen(3000, function(){
    console.log("server is running on 3000");
});