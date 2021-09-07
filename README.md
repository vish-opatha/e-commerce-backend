# E-Commerce Website

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
     
  ## Description
  This project is a backend resembling an E-Commerce website in which several details are retrieved, updated, deleted and created using a selected **Object Relational Mapping** (ORM) package with a database. There are several tables in the database which can be used perform the above functionalities. Each and every table support CRUD using the ORM. This project is based on Node.js and MySql. **Sequelize, MySql2 and dotenv** packages are used in the application.

  All the routes and the associated results are simulated using **Insomnia Core**.
  
  ## Table of Contents
  * [Important Links](#Important-Links)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Technical Acceptance Work Done](#Technical-Acceptance-Work-Done)
  * [Repository Quality Work Done](#Repository-Quality-Work-Done)
  * [Questions](#Questions)

  ## Important Links
  Following are the important links related to this application.
  * [E-Commerce Website - Github Repo](https://github.com/vish-opatha/e-commerce-backend)
  * [Installation - Walkthrough Video with Audio](https://drive.google.com/file/d/1-MQV_2aK166HFlk7FP7zVX21pgT9A36O/view?usp=sharing)
  
  * [E-Commerce Website - Walkthrough Video with Audio](https://drive.google.com/file/d/1-MQV_2aK166HFlk7FP7zVX21pgT9A36O/view?usp=sharing)

  ## Installation
  First, install the necessary dependencies, using the following command:

  ```
  npm install 
  ```
  Then, in the command prompt run the following command to enter the MySQL shell:

  ```
  mysql -u <name of the user> -p 
  ```
  An example user can be root.If you have set a password for the user, you will be prompted for the password. Enter the password there, and login to the MySQL shell.

  Then, in the MySQL shell run the following command to create the database. Script for the database resides in the db folder.

  ```
  source db/schema.sql
  ```
  After that, amend the variables in the .env file. Finally, when you have amended the .env file with proper variable, you can run the following command to seed data to the database. Seeding creates the tables and insert some rows in those tables.

  ```
  node seeds
  ```
  > **Note:** You can see the 'Installation' video in the Important Links section, if you need more details.

  
  ## Usage
  To start the server, run the following command. 

  ```
  node server.js
  ```
   > **Note:** You can see the 'Walkthrough' video in the Important Links section, if you need more details.

  ## Technical Acceptance Work Done
  1. The application is connected to MySQL database using Mysql2 and sequelize properly and synced as required.
  2. Models for the product, category, tag are created as specified in the requirement. Furthermore, routes are created to GET, POST, PUT and DELETE for each table.
  3. Implementation of the backend routes facilities the user to create new rows, update rows, delete and to retrieve them from the database.
  4. Sensitive enviornment data are accessed and saved using the .env file through 'dotenv' package.
 
  ## Repository Quality Work Done
  1. Repository is named as e-commerce-backend.
  2. Tags are indented accordingly and comments are included while following the best practices for naming conventions.
  3. Changes were committed multiple times with messages.
  4. Repository includes videos for the intallation and walkthrough with Insomnia Core.

  ## Questions
  If you have any questions about the repo, open an issue or directly contact me at <v.opatha@gmail.com> You can find my other work at [Github](https://github.com/vish-op)