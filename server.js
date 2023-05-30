const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) =>
    res.render("home", { headingPage: "Portfolio Website" })
);
app.get("/about", (req, res) =>
    res.render("about", { headingPage: "Hello I'm Sahil Aggarwal" })
);
app.get("/project", (req, res) =>
    res.render("project", { headingPage: "Projects" })
);
app.get("/services", (req, res) =>
    res.render("services", { headingPage: "Services Offered" })
);
app.get("/contact", (req, res) =>
    res.render("contact", { headingPage: "Contact Us" })
);
app.listen(process.env.PORT || port, () =>
    console.log(`Example app listening on port ${port}!`)
);