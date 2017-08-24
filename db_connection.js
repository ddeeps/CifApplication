var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
database: "cif_test"
});

con.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Error connecting database ... nn");    
}
});
var id = 6;
var post  = {cid:id, EmployeeName: 'ddd',EmployeeId:id};
var insQuery = 'insert into candidate SET ?';
var query = con.query(insQuery ,post, function(err, rows, fields) {
con.end();
  if (!err)
    console.log('The solution is: ', rows, query );
  else
    console.log('Error while performing Query.' + err );
 });
 