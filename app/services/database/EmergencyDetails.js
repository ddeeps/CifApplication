function EmergencyDetails() {}


EmergencyDetails.prototype.insert = function (req, res, dbObj, details, callback) {
    
var insArgs = {
    CID:details.cid,
    BLOODGROUP: req.body.emergencyDetails.bloodGroup,
    ALLERGICTO: req.body.emergencyDetails.allergicTo,
    BLOODPRESSURE: req.body.emergencyDetails.bloodPressure,
    EYESIGHT: req.body.emergencyDetails.eyeSight,
    MAJORILLNESS: req.body.emergencyDetails.anyMajorIllness,
    EMER_CONT_NAME: req.body.emergencyDetails.emergencyContactPerson,
    EMER_CONT_ADDR: req.body.emergencyDetails.emergencyContactAddress,
    EMER_CONT_PH: req.body.emergencyDetails.emergencyContactNumber,
    SUGAR:req.body.emergencyDetails.sugar
  };
  var insQuery = 'insert into EMERGENCY_DETAILS SET ?';
    dbObj.query(insQuery, insArgs, function (err, results, fields) {
    if (!err) {
      
      callback();
    }
    else {
      console.log('Error while performing Query.' + err);
    }
  });
  
}


var emergencyDetails = new EmergencyDetails();

module.exports = emergencyDetails;