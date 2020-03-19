// Author: Irada ShamilovaS

// import modules
const express = require("express");
const path = require("path");
const greeting = require("./greeting");
const mysql = require("mysql");
const bodyParser = require("body-parser");

var data = [];

// Init App
const app = express();


// Start server
app.listen(8000, err=>{
	if (err) throw err;
	console.log("server started");
});

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Link static css files
app.use(express.static("views", {
  extensions: ["css"]
}));

app.use(express.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
  
// Home route
app.get("/",(req,res)=>{
  res.render('index', {
    pageGreeting: greeting.greet()
  });
});

app.get("/index",(req,res)=>{
  res.render('index', {
    pageGreeting: greeting.greet()
  });
});

app.get("/packages", (req, res)=>{
	

	// Populate packages
	var conn = mysql.createConnection({
  host: "localhost",
  user: "Karim",
  password: "password",
  database: "travelexperts"
	});

	conn.connect((err)=>{
		if (err) throw err;
		var sql = "SELECT * FROM packages";
		//const packagesDb = '';
		conn.query(sql, (err, packagesDb, fields)=>{
		//	if (err) throw err;
			console.log(packagesDb);

			let content = ' `';

			// Loop through each element in the packages and append to content
			// Note: I've attached url link to the image rather than as a separate link
			packagesDb.forEach(function(package){

				content +=  
				`<article>
	<h2 class="center header-blue"> ${package.PkgName} </h2>
	<p class="packages center">Dates: ${package.PkgStartDate} - ${package.PkgEndDate}</p>
	<p class="packages center">Price: ${package.PkgBasePrice} </p>
	<img class="package-img shadow2" src="https://picsum.photos/id/1019/300/300" alt="Destination: ${package.PkgName}">
</article>`	
			});


				console.log(content);
				res.render('packages', { pugPackages : content });
				
				conn.end((err)=>{
				if (err) throw err;
			});
		});
	});
	
	
});

// Other pages routing
app.get("/contact", (req, res)=>{
  res.render('contact')
});

// app.get("/about", (req, res)=>{
//   res.render('about')
// });

// capture customer data and connect to DB
app.post("/submitted", (req, res)=>{
  console.log(req.body);
  data[0] = req.body.CustFirstName;
	data[1] = req.body.CustLastName;
	data[2] = req.body.CustEmail;
	var con = mysql.createConnection({
		host: "localhost",
		user: "Karim",
		password: "password",
		database: "travelexperts"
	});


	//create variable to pass into thank-you.pug page
	let customerName = req.body.CustFirstName;

	// insert data into customers table in DB and print result if OK
  con.connect((err)=>{
		if (err) throw err;
				
		var sql = "INSERT INTO `customers`(`CustFirstName`, `CustLastName`, `CustEmail`)"
			+ "VALUES (?,?,?)";
		
		con.query(sql, data, (err, result, fields)=>{
			if (err) throw err;
		
			console.log(result);
			// Display Thank you page with customer name (variable in Pug)
			let fname = req.body.fname;
			res.render('thank-you', { customerInfo: customerName });

			con.end((err)=>{
				if (err) throw err;
			});			
		});
	});	
});


