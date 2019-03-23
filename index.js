// const express = require('express');
import express from "express";
const app = express();

const PORT = 4000;
// function handleListening() {
//     // console.log('Listening on: http://localhost:' + PORT);
//     console.log(`Listening on: http://localhost:${PORT}`);
// }
const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

// function handleHome(req, res) {
//     console.log(req);
//     res.send('Hello from Home!');
// }
const handleHome = (req, res) => res.send('Hello from Guri');

// function handleProfile(req, res) {
//     res.send('You are on my Profile');
// }
const handleProfile = (req, res) => res.send('You are on my Profile');


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);