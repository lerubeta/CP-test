const CandidateModel = require('../models/CandidateModel');

exports.createCandidate = async (req, res) => { 
    const candidate = req.body;
    const insertedCandidate = await CandidateModel.addCandidateToDb(candidate);
    if (insertedCandidate) {
        res.send("200 OK");
    } else { 
        res.status(500).send("Server error");
    }
}
