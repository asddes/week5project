let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let db = [];

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use(express.static('images'));
app.use(express.static('css'));

app.get("/", function(req, res) {
    console.log("Homepage");
    res.render('index.html');
});
app.get("/newtask", function(req, res) {
    res.render("addTask.html", {tasks: db});
});
app.get("/listtasks", function(req, res) {
    res.render("listTasks.html", {tasks: db});
});

app.post("/newtask", function(req, res){
    db.push(req.body);
    console.log(req.body);
    res.render("addTask.html", { tasks: db });
})

app.listen(8080);