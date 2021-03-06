// importando dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");
const server = express(); // usando o express
server
    .use(express.static("public"))
    .set("views", path.join(__dirname, "views"))
    .set("view engine", "hbs")
    .get("/", pages.index)
    .get("/orphanage", pages.orphanage)
    .get("/orphanages", pages.orphanages)
    .get("/create-orphanage", pages.createOrphanage);
// a rota > lendo a pasta /

server.listen(5500, () => {
    console.log("Server started");
});