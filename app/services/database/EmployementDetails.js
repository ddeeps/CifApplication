function EmployementDetails() {}
var DateUtils = require('./../DateUtils.js');
EmployementDetails.prototype.insert = function (req, res, dbObj, details, callback) {
    var employers = req.body.employmentDetails.employers;
    var employerArray = [];
    employers.forEach(function (employer) {
        employerArray.push([
            details.cid,
            '',
            employer.name,
            employer.address,
            employer.empID,
            DateUtils.stringToDate(employer.fromDate, "dd-mm-yyyy", "-"),
            DateUtils.stringToDate(employer.toDate, "dd-mm-yyyy", "-"),
            employer.designation,
            employer.lastSalary,
            employer.reportingManagersName,
            employer.reportingManagersDesignation,
            employer.reportingManagersContact,
            employer.reasonForLeaving,
            employer.modeOfSeperation,
            employer.seperationModeOthers
        ]);
    }, this);

    var insQuery = 'insert into EMPLOYMENT_DETAILS values ?';
    dbObj.query(insQuery, [employerArray], function (err, rows, fields) {
        if (!err) {
            // console.log('The solution is: ', rows, query);
        } else {
            console.log('Error while performing Query.' + err);
        }
    });


    var empBrkArgs = {
        CID: details.cid,
        EMPLOYMENT_BREAK_FROM: DateUtils.stringToDate(nullCheck(req.body.employmentDetails.employmentBreakFrom), "dd-mm-yyyy", "-"),
        EMPLOYMENT_BREAK_TO: DateUtils.stringToDate(nullCheck(req.body.employmentDetails.employmentBreakTo), "dd-mm-yyyy", "-"),
        EMPLOYMENT_BREAK_REASON: req.body.employmentDetails.reasonForEmploymentBreak,
        STUDY_EMPLOYMENT_BREAK_FROM: DateUtils.stringToDate(nullCheck(req.body.employmentDetails.employmentStudiesBreakFrom), "dd-mm-yyyy", "-"),
        STUDY_EMPLOYMENT_BREAK_TO: DateUtils.stringToDate(nullCheck(req.body.employmentDetails.employmentStudiesBreakTo), "dd-mm-yyyy", "-"),
        STUDY_EMPLOYMENT_BREAK_REASON: req.body.employmentDetails.reasonForEmploymentStudiesBreak
    };

    var insQuery = 'insert into EMPLOYMENT_BREAK SET ?';
    dbObj.query(insQuery, empBrkArgs, function (err, rows, fields) {
        if (!err) {
            // console.log('The solution is: ', rows, query);
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
var employementDetails = new EmployementDetails();

module.exports = employementDetails;