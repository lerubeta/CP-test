const app = require('./src/app');
const port = process.env.PORT || 3000;
const dbConnection = require('./config/dbConnection')

async function connectToDatabaseAndStartServer() {
    try{
        await dbConnection.connectToDbServer();
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        })
    }catch(e){
        console.log("Can't connect to database: " + e);
    }
}

connectToDatabaseAndStartServer();


// 'use strict';

// const express = require('express');
// const app = express();
// app.use(express.json());

// // Your code starts here. Placeholders for .get and .post are provided for
// //  your convenience.

// app.post('/candidates', async function (req, res) {
//     const candidate = req.body;
//     const candidateToInsert = createCandidateObjectToInsert(candidate);
//     const result = await Candidate.addCandidate(candidateToInsert)
//     if (result) {
//         res.send("200 OK");
//     } else {
//         res.status(500).send("Server error");
//     }
    
// });

// app.get('/candidates/search', async function (req, res) {
//     const skills = req.params.skills;
//     const result = await
    
// });

// const getCandidateQuery = (skills) => {
//     let searchQuery = {};
//     searchQuery.skills = query.skills ? query.skills : "";
    
// }

// const createCandidateObjectToInsert = (user) => { 
//     return {
//         id: user.id,
//         name: user.name,
//         skills: user.skills
//     }
// }

// app.listen(process.env.HTTP_PORT || 3000);