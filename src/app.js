const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const CandidateController = require("../controllers/CandidateController");
const SearchController = require("../controllers/SearchController")

app.use(cors());
app.use(express.json());

//User Endpoints
app.post("/candidate", CandidateController.createCandidate);

//Search Endpoints
app.get("/candidate/search", SearchController.getAllCandidates);

module.exports = app;
