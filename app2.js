const mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "Karim",
  password: "password",
  database: "travelexperts"
});

conn.connect((err)=>{
	if (err) throw err;
	var sql = "SELECT * FROM customers";
	conn.query(sql, (err, result, fields)=>{
		if (err) throw err;
		console.log(result);
		conn.end((err)=>{
			if (err) throw err;
		});
	});
});
