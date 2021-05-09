const { getDb } = require('../config/dbConnection');

exports.addCandidate = async (candidate) => { 
    const _db = getDb();
    try {
        const collection = _db.collection("candidate");
        const result = await collection.insertOne(candidate)
        return result;
        
    } catch {
        return null;
    }
}
// exports.getAllCandidates = async () => {
//     const _db = getDb();
//     try {
//         const collection = _db.collection("candidate");
//         const result = await collection.find({}).toArray();
//         return result;

//     } catch {
//         return null;
//     }
   
    
// }
exports.getCandidatesBySkillsArr = async (skillsArr) => { 
    const _db = getDb();
    console.log(skillsArr)
    try {
        const collection = _db.collection("candidate");
        const result = await collection.find({
            skills: { $all: ['python'] }
            //skills: { $in: skillsArr }
        }).toArray();
        return result;
        
    } catch {
        return null;
    }
}