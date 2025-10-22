// Create a new router
const express = require("express");
const router = express.Router();

const html = `${__dirname}/a.html`;

//const html = "...\\04_express_3382815601\\a.html";
//"a.html";
// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));

router.get("/contact", (req, res) => res.send ("<h1>This is the contact page</h1>"));

router.get("/date", (req, res) => {
  const date = new Date(); //creates a new date with every refresh
  res.send(`<h1>This is date</h1><p>${date}</p>`);
});

router.get("/welcome/:name", (req, res) => {
    const name = req.params.name; //gets the name from the url
    res.send(`<h1>Welcome ${name}. Enjoy!</h1>`);
});

router.get("/chain", (req, res, next) => {
        next(); //next() tells Express to move to the next matching function
}, (req, res) => {
    res.send(`<h1>You have accessed the chain route!</h1>`);
});

router.get("/html", (req, res, next) => {
    if (html) {
        next(); // tells it to skip the else
    }
    else {
        res.send(`<h1>HTML file not recognised</h1>`);
    }
}, (req, res) => {
    res.sendFile(html);
}); //current setup only works when a.html is in the same directory as main.js

// Export the router object so index.js can access it
module.exports = router;
