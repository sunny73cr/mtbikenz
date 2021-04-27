This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

How to use :

Open MySQL Workbench.
Open the CreateDB.sql file found in /MS3-Code
Run the query.

			///	N O T E ///

You may need to edit the SQL Connection details found in /MS3-Code/api/dataservice/dataservice.js
Change the "user" and "password" details within the three functions that connect to the SQL Database.
I have left an /*EDIT ME*/ tag above each section, and a /*EDIT FINISHES*/ tag below to indicate
which sections you are required to edit.

You must edit this section to include the authentication details for your MySQL Server.

		  /// E N D N O T E ///
			
Open the 'MS3-Code' folder in Visual Studio Code.

Open a terminal, and execute the following:
	cd api
	npm install
	
	npm start
	
Open another terminal and execute the following.
Do not close the first terminal, and leave its service running.
	cd client
	npm install
	
	npm start
	
Navigate your browser to: http://localhost:3000

You must register an account before using the website;
none are supplied within the CreateDB.sql query.

Click the 'Register' button and enter your details.
They can be gibberish...
You may try SQL injection if you feel adventurous; I've not mitigated this in any way.

Click the 'Login' button and re-enter your details.

Use the website :)
