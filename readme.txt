Author: Irada Shamilova
********************************************************
Assignment 5: MongoDB 
In this project, you will use the skills and knowledge you've gained 
to work with MongoDB. 

Requirements: 
5.1. Store information from the contact form on your website in a database 
5.2. Find contact information from a particular user and console.log the 
     entire contact form info to the terminal 
5.3. Try passing in the information to a pug ﬁle and displaying it on the page 
5.4. Play around with Compass to double check your database collections -n/a

*********************************************************
Assignment 6: MVC and Mongoose 
In this project, you will use the skills and knowledge you've gained to organize 
your project and work with Mongoose. 

Requirements:
6.1 Replace your Mongo code with Mongoose code for your contact form. -n/a
6.2 Reorganize and refactor your informational website using the MVC pattern. -n/a
6.3 Validate the ﬁelds in your contact form and display errors. 
6.4 Redirect to a thank you page and thank the person by name.

*********************************************************
Solution:

Note. I used mysql DB (instead of MongoDB) as per instructions from our instructor
      Live link to Pictures from Picsum.com is used, so internet conection is necessary to view pages

For this Assignment I used Travel experts front-end that I created for my Individual Assignment

5.0  Run MySQL server from XAMPP and import the Travel experts database 
     Create a local host user with username: Karim and password: password
         host: "localhost",
		 user: "Karim",
		 password: "password",
		 database: "travelexperts"

5.1 Now that the DB is ready to accept data, input data on the Contact page.
5.2 The user data will be logged in the console.log and sent to TravelExperts database
5.3 - The First name will be passed to a contact.pug page as a variable and 
      will be dynamically added to the Thank you page.
    - Template.pug with 7 blocks is used for a layout and it extends to other pug files.
    - app2.js will connect to the database and pull all customer info into console.log
5.4 Compass is the UI for Mongo DB, so not applicable here as MySQL was used with XAMPP 
    as per instructor
___________________________________________________________
6.1 Mongoose wasn't covered in the course, so this requirement was removed by the instructor
6.2 MVC pattern wasn't covered in the course - removed by the instructor
6.3 Form is validated and errors displayed
6.4 After submitting the contact form, thank you page dynamically generates personalised Thank you message.



   