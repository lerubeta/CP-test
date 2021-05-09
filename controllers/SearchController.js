const CandidateModel = require('../models/CandidateModel');

exports.getAllCandidates = async (req, res) => {
    const query = await getSearchParams(req.query.skills);
    if (query) {
        console.log(query)
        const resultCandidates = await CandidateModel.searchSkills(query);
        
        if (resultCandidates === null || resultCandidates === undefined) {
            return res.status(500).send("Server error")
        }
        res.json(resultCandidates);
    } else
        return res.status(400).send("No Skills found")
}

const getSearchParams = async (skills) => {
    if (skills) {
           const searchSkillsArr = skills.split(",");
    return searchSkillsArr;
    }
    else return false
      
}