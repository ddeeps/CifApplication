function CandidatePersonal() { }

CandidatePersonal.prototype.insert = function (req, res, dbObj, details, callback) {
    console.log('Inserting personal details');
    // console.log(moment(req.body.personalDetails.placeOfBirth).format('DD-MM-YYYY'));
    console.log(stringToDate(req.body.personalDetails.dateOfBirth,"dd-mm-yyyy","-"));
     var spouseDOB= null; 
     
     if(req.body.personalDetails.spouseDOB != null && req.body.personalDetails.spouseDOB != undefined ){
        spouseDOB=  stringToDate(req.body.personalDetails.spouseDOB,"dd-mm-yyyy","-");
    }

     var args = {TITLE :req.body.personalDetails.title,
        FIRSTNAME:req.body.personalDetails.firstName,
        MIDDLENAME:req.body.personalDetails.middleName,
        LASTNAME: req.body.personalDetails.lastName,
        DOB:stringToDate(req.body.personalDetails.dateOfBirth,"dd-mm-yyyy","-"),
        PLACE_OF_BIRTH:req.body.personalDetails.placeOfBirth,
        MOB_NUMBER:req.body.personalDetails.mobileNumber,
        ALT_MOB_NUM:req.body.personalDetails.alternateNumber,
        PERSONAL_EMAILID:req.body.personalDetails.personalEmail,
        NATIONALITY:req.body.personalDetails.nationality,
        PASSPORT_NO:req.body.personalDetails.passportNumber,
        PAN_NO:req.body.personalDetails.pan,
        NASSCOM_NSR_ITPIN:req.body.personalDetails.nsr,
        FATHER_NAME:req.body.personalDetails.fathersName,
        FATHER_DOB:stringToDate(req.body.personalDetails.fathersDOB,"dd-mm-yyyy","-"),
        MOTHER_NAME:req.body.personalDetails.mothersName,
        MOTHER_DOB: stringToDate(req.body.personalDetails.mothersDOB,"dd-mm-yyyy","-"),
        SPOUSE_NAME: req.body.personalDetails.spouseName,
        SPOUSE_DOB:spouseDOB,
        GENDER:req.body.personalDetails.gender,
        CHILD_DETAILS :JSON.stringify(req.body.personalDetails.children),
        
        CID:details.cid
     };

     
     var insQuery = 'insert into PERSONAL_DETAILS SET ?';
     var query = dbObj.query(insQuery, args, function (err, rows, fields) {
         if (!err) {
           
            callback();
         }
         else {
             console.log('Error while performing Query.' + err);
         }
     });
}


function stringToDate(_date,_format,_delimiter)
{
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
}


var candidatePersonal = new CandidatePersonal();

module.exports = candidatePersonal;