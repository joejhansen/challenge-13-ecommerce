# challenge-13-ecommerce

## Description

Using Express, mySQL, and Sequelize to create a functional database for an e-commerce website.

## Resources

[Github Repository](https://github.com/joejhansen/challenge-13-ecommerce)

[Video Walkthrough](https://youtu.be/QieQzCqX-Co)

## Installation and Setup

Simply run a terminal within the "Develop" folder and install the dependencies with 

`npm i`

Then login to you mySQL server with

`mysql -u root -p`

and enter your password. After logging in, use

`SOURCE db/schema.sql;`

To set up your database. 

To seed the databse, make sure you have your databse name, mySQL user, and password in the right values in the .env file.

After setting up your credentials in the .env, use

`npm run seed`

## Starting the server

After seeding the database, run the server with

`npm run start`

You should now have a server running on port 3001 of your machine with a connection to a mySQL databse named ecommerce_db.
