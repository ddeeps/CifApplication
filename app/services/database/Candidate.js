function Candidate() {}
Candidate.prototype.insert = function (req, res, dbObj, details, callback) {
  var args = {
    EmployeeName: req.body.employeeName,
    EmployeeId: req.body.employeeID
  };
  var insQuery = 'insert into candidate SET ?';
  dbObj.query(insQuery, args, function (err, results, fields) {
    if (!err) {
      console.dir(results.insertId);
      details.cid = results.insertId;
      callback();
    } else {
      console.log('Error while performing Query.' + err);
    }
  });

}

Candidate.prototype.fetch = function (req, res, dbObj) {

  res.setHeader('Content-Type', 'application/json');

  var result = dbObj.query('SELECT * FROM ADDITIONAL_INFORMATION', function (err, rows, fields) {
    if (!err) {
      // console.log('The result is ', rows);
    } else {
      console.log('Error while performing Query.' + err);
      }

    res.send(JSON.stringify(rows));
  });
}

Candidate.prototype.fetchById = function (req, res, dbObj) {

  res.setHeader('Content-Type', 'application/json');
  console.log(' req.query.cid ', req.params.cid);
  var args = {
    cid: req.query.cid
  }
  var result = dbObj.query('SELECT * FROM candidate where CID = ' + req.params.cid,
    function (err, rows, fields) {
      if (!err) {
        console.log(' req.query.cid ', req.params.cid);
        // console.log('The result is ', rows);

      } else {
        console.log('No results.');
      }

      res.send(JSON.stringify(rows));
    })
}

var candidate = new Candidate();

module.exports = candidate;