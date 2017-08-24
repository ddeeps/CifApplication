function Address() {}


Address.prototype.insert = function (req, res, dbObj, details, callback) {
    var curAddressArgs = {
        ADDRESS_TYPE: 'C',
        ADDRESS: req.body.addressDetails.current.addressLine1+ req.body.addressDetails.current.addressLine2 + req.body.addressDetails.current.addressLine3 + req.body.addressDetails.current.addressLine4,
        CITY: req.body.addressDetails.current.cityName,
        STATE: req.body.addressDetails.current.stateName,
        LANDMARK: req.body.addressDetails.current.landmark,
        DURATION: req.body.addressDetails.current.durationOfStay,
        PINCODE: req.body.addressDetails.current.pinCode,
        TELEPHONE: req.body.addressDetails.current.telephone,
        CID: details.cid
    };
    var perAddressArgs = {
        ADDRESS_TYPE: 'P',
        ADDRESS: req.body.addressDetails.permanent.addressLine1 + req.body.addressDetails.permanent.addressLine2 + req.body.addressDetails.permanent.addressLine3 + req.body.addressDetails.permanent.addressLine4,
        CITY: req.body.addressDetails.permanent.cityName,
        STATE: req.body.addressDetails.permanent.stateName,
        LANDMARK: req.body.addressDetails.permanent.landmark,
        DURATION: req.body.addressDetails.permanent.durationOfStay,
        PINCODE: req.body.addressDetails.permanent.pinCode,
        PINCODE: req.body.addressDetails.permanent.pinCode,
        TELEPHONE: req.body.addressDetails.current.telephone,
        CID: details.cid
    };

    var insQuery = 'insert into ADDRESS_DETAILS SET ?';
    var query = dbObj.query(insQuery, curAddressArgs, function (err, rows, fields) {
        dbObj.query(insQuery, perAddressArgs, function (err, rows, fields) {
            
            if (!err) {
                //console.log('The solution is: ', rows, query);
                callback();
            } else {
                console.log('Error while performing Query.' + err);
            }
        });
      
        if (!err) {
            //console.log('The solution is: ', rows, query);
            //  res.send('Current Address details of ' + req.body.employeeName + ' Saved to DB  with Candidate id of ' +
            //      req.body.cid);
        } else {
            console.log('Error while performing Query.' + err);
            //  res.send('Error while performing Query.' + err);
        }
    });
    
}

var address = new Address();

module.exports = address;