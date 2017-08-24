function EducationDetails() { }

EducationDetails.prototype.insert = function (req, res, dbObj, details, callback) {
    if (req.body.educationDetails.tenth != null && req.body.educationDetails.tenth != undefined) {
        var tenthArgs = prepareTenthArgs(details, req);
        insertIntoDB(req, res, dbObj, tenthArgs, callback);
    }
    if (req.body.educationDetails.twelth != null && req.body.educationDetails.twelth != undefined) {
        var twelthArgs = prepareTwelthArgs(details, req);
        insertIntoDB(req, res, dbObj, twelthArgs, callback);
    }
    if (req.body.educationDetails.graduation != null && req.body.educationDetails.graduation != undefined) {
        var graduationArgs = preparegraduationArgs(details, req);
        insertIntoDB(req, res, dbObj, graduationArgs, callback);
    }
    if (req.body.educationDetails.postGraduation != null && req.body.educationDetails.postGraduation != undefined) {
        var postGraduationArgs = preparePostgraduationArgs(details, req);
        insertIntoDB(req, res, dbObj, postGraduationArgs, callback);
    }
    callback();
}

function insertIntoDB(req, res, dbObj, args, callback) {

    var insQuery = 'insert into EDUCATION_DETAILS SET ?';
    var query = dbObj.query(insQuery, args, function (err, rows, fields) {

        if (!err) {

        } else {
            console.log('Error while performing Query.' + err);
        }
    });
};



function prepareTenthArgs(details, req) {
    var tenthArgs = {
        cid: details.cid,
        CLASSLEVEL: "tenth",
        SCHOOL_NAME: req.body.educationDetails.tenth.schoolName,
        BOARD: req.body.educationDetails.tenth.board,
        DURATION: req.body.educationDetails.tenth.duration,
        PASSING_YEAR: req.body.educationDetails.tenth.yearOfPassing,
        PERCENTAGE: req.body.educationDetails.tenth.yearOfPassing,
        eduGapReason: req.body.educationDetails.eduGapReason,
    };
    return tenthArgs;
}

function prepareTwelthArgs(details, req) {
    var twelthArgs = {
        cid: details.cid,
        CLASSLEVEL: "twelth",
        SCHOOL_NAME: req.body.educationDetails.twelth.schoolName,
        BOARD: req.body.educationDetails.twelth.board,
        DURATION: req.body.educationDetails.twelth.duration,
        PASSING_YEAR: req.body.educationDetails.twelth.yearOfPassing,
        PERCENTAGE: req.body.educationDetails.twelth.percentage,
    };
    return twelthArgs;
}

function preparegraduationArgs(details, req) {
    var graduationArgs = {
        cid: details.cid,
        CLASSLEVEL: "graduation",
        SCHOOL_NAME: req.body.educationDetails.graduation.college,
        BOARD: req.body.educationDetails.graduation.board,
        DURATION: req.body.educationDetails.graduation.duration,
        PASSING_YEAR: req.body.educationDetails.graduation.yearOfPassing,
        PERCENTAGE: req.body.educationDetails.graduation.percentage,
    };
    return graduationArgs;
}

function preparePostgraduationArgs(details, req) {
    var postGraduationArgs = {
        cid: details.cid,
        CLASSLEVEL: "postGraduation",
        SCHOOL_NAME: req.body.educationDetails.postGraduation.college != null ? req.body.educationDetails.postGraduation.college : 'not available',
        BOARD: req.body.educationDetails.postGraduation.board != null ? req.body.educationDetails.postGraduation.board : 'not available',
        DURATION: req.body.educationDetails.postGraduation.duration != null ? req.body.educationDetails.postGraduation.duration : 'not available',
        PASSING_YEAR: req.body.educationDetails.postGraduation.yearOfPassing != null ? req.body.educationDetails.postGraduation.yearOfPassing : 1900,
        PERCENTAGE: req.body.educationDetails.postGraduation.percentage != null ? req.body.educationDetails.postGraduation.percentage : 'N/A',
    };
    return postGraduationArgs;
}



var educationDetails = new EducationDetails();



module.exports = educationDetails;