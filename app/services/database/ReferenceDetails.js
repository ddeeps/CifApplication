function ReferenceDetails() {}
ReferenceDetails.prototype.insert = function (req, res, dbObj, details, callback) {
    var references = req.body.referenceDetails;
   
    // console.log("string t date " + DateUtils.stringToDate(req.body.employmentDetails.employers[0].fromDate,"dd-mm-yyyy","-"));

    var referenceArray = [];
    references.forEach(function (reference) {
      
        referenceArray.push([
            details.cid,
            reference.name,
            reference.designation,
            reference.organization,
            reference.contact,
            reference.email,
            reference.periodOfAcquaintance
        ]);
    }, this);
    
  
    var insQuery = "insert into REFERENCE_DETAILS values ?";
    dbObj.query(insQuery, [referenceArray], function (err, rows, fields) {
        if (!err) {
            // console.log('The solution is: ', rows);
            callback();
        } else {
            console.log('Error while performing Query.' + err);
        }
    });

}

var referenceDetails = new ReferenceDetails();



module.exports = referenceDetails;