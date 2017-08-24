var DateUtils = require('./../DateUtils.js');
function AdditionalInformation() {}

AdditionalInformation.prototype.insert = function (req, res, dbObj, details, callback) {
    var strengths = req.body.additionalDetails.strengths;
    var weekness = req.body.additionalDetails.weekness;
    strengths = Object.keys(strengths).map(function (key) { return strengths[key]; });
    weekness = Object.keys(weekness).map(function (key) { return weekness[key]; });
        
    var args = {
        CID: details.cid,
        PHYSICAL_DISABILITIES: req.body.additionalDetails.disablilities,
        COURT_PROCEEDING_SUMMARY:req.body.additionalDetails.courtProceedings,
        PROWARENESS_PREV_INTVW_DATE: DateUtils.stringToDate(nullCheck(req.body.additionalDetails.interviedOn), "dd-mm-yyyy", "-"),
        PROWARENESS_PREV_INTVW_OUTCOME: req.body.additionalDetails.interviedOutcome,
        HOBBIES: req.body.additionalDetails.hobbies,
        INTERESTS: req.body.additionalDetails.interests,
        GOAL_OR_AIM: req.body.additionalDetails.goalsInLife,
        PRINCIPALS_IDEALS_LIFEGUIDE: req.body.additionalDetails.lifePrincipals,
        STRENGTH: strengths.join(','),
        WEAKNESS: weekness.join(','),
        TRAVEL_INDIA: req.body.additionalDetails.willTravelInIndia,
        TRAVEL_ABROAD: req.body.additionalDetails.willTravelAbroad,
        RESTRICTIONS_ON_TRAVEL: req.body.additionalDetails.travelStateRestrictions,
        PROWARE_EMP_RELATION_NAME: req.body.additionalDetails.knownEmployees,
        PUBLICATIONS: req.body.additionalDetails.publications,
        SPECIALIZED_TRAININGS: req.body.additionalDetails.trainingAttended,
        INTEREST_ON_SPECIFIC_TRAININGS: req.body.additionalDetails.interestedInTrainings,
        OTHER_INFORMATION_SUGGESTION: req.body.additionalDetails.suggestions
    };
    
    var insQuery = 'insert into ADDITIONAL_INFORMATION SET ?';
    dbObj.query(insQuery, args, function (err, results, fields) {
        if (!err) {
            callback();
        } else {
            console.log('Error while performing Query.' + err);
        }
    });


}


function nullCheck(strDate){
    if(strDate != null && strDate != undefined){
        return strDate;
    }
    else return '00-00-2100';
}
var additionalInformation = new AdditionalInformation();

module.exports = additionalInformation;