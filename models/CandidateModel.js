const Candidate = require("../queries/Candidate");


exports.addCandidateToDb = async (candidate) => { 
    const candidateToInsert = createCandidateObjectToInsert(candidate);
    console.log(candidateToInsert);
    const result = await Candidate.addCandidate(candidateToInsert);
    if (result) {
         const insertedCandidate = result.ops[0];
         return insertedCandidate;
    } else { 
        return null;
    }
}
// exports.getAllCandidates = async () => {
//     const candidates = await Candidate.getAllCandidates();
//     return candidates
// }

exports.searchSkills = async (skillsArr) => {
    const candidate = await Candidate.getCandidatesBySkillsArr(skillsArr);
    console.log(candidate)
    return candidate;
}

const createCandidateObjectToInsert = (candidate) => {
    let skillsArr = candidate.skills.split(",")
    return {
        name: candidate.name,        
        skills: skillsArr
    }
}