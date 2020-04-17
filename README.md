# AvasAngels iPad terminal

## Introduction

### **What is this code?**

This codebase is Team 16's production code for The University of Nottingham's second-year Computer Science group project module (module codes **COMP2002** or **G52GRP**) <br>

Team 16 are working with software company [Kainos](https://www.kainos.com/) and charity [Avas Angels](https://www.avas-angels.com/) to produce a web-app, intended for use on an iPad terminal within a Birmingham children's hospital ICU unit by the parents of sick children. The terminal is intended to give the parents more information about the charity and the services available to them in and around the hospital, as well as give them opportunities to leave feedback and contact details for the charity.

### **Who made this code?**

Team 16 consists of:

- Ali Soufan (Team leader)
- Lawrence Warren (Git Master)
- Ben Smith (Team administrator)
- Yutian Chen
- Wenzheng _"Steven"_ Shan
- Junhao Zhang

Overseeing the project is:

- Ender Ozcan (Academic supervisor)
- Phil Akers (Avas Angels charity representative)
- Pedro Mendonca (Kainos representative)
- Nick Harewood (Kainos representative)

### **What does this code use to run?**

This codebase represents a full-stack _NodeJS_ web application, with the frontend based on the NodeJS framework _React_ (bootstrapped by `create react app`) and with the backend server & API code written in _NodeJS_ using the _Express_ framework. The database for the site is a _noSQL_ (specifically _MongoDB_) database hosted for free on MongoDB Atlas, with the site itself is hosted for free on _Heroku_.

### **Where can I find this code?**

This codebase is hosted in a repository on [GitLab](https://projects.cs.nott.ac.uk/COMP2002/2019-2020/team16_project) and mirrored for Heroku deployments at [GitHub](https://github.com/psyljw/team16_project). <br>
It's Heroku deployments can be found at the following locations (_Note that the web-app is intended to be viewed on an iPad_):

- [master branch deployment](https://avas-angels.herokuapp.com/ "Main project deployment") <br>
- [develop branch deployment](https://avas-angels-develop.herokuapp.com/ "Develop branch deployment") <br>
- [serverStuff branch deployment](http://avas-angels-develop-server.herokuapp.com/ "Current working deployment") (**17:04:2020:** This is only working deployment)

## Available Scripts

_For more information on exactly how the scripts run, view the `"scripts"` tag in `package.json`._ <br> In the project directory, you can run the following commands:

### **`npm start`**

This command simply runs `node server.js` on [http://localhost:8080](http://localhost:8080). `npm start` is the command run by Heroku when deploying.

### **`npm run liveStart`**

Runs the app in development mode.<br>
Opens [http://localhost:3000](http://localhost:3000) automatically, and reloads the page automatically when you save changes to the file - you will also see any lint errors in the console.<br>
Currently, `npm run liveStart` does _not_ fetch from the database as it does not enter the program at `server.js`. `npm run live Start` is therefore best used for developing hard coded content such as page styling - if you are working on debugging net code, use the following script, `npm run buildRun`.<br>

### **`npm run buildRun`**

A custom script for building and running the project. <br>
This script is best used when testing server code or for changes to the database. It automatically runs `npm build` followed by `node server.js` on [http://localhost:8080](http://localhost:8080). <br>
The server is configured to run the production-ready build files (the same way Heroku does) so if you want to see changes you must build first.

### **`npm test`**

Launches the test runner, automatically running all test suits that can be found. <br>
Test files should be placed within the `tests/` directory in the root.

### **`npm run build`**

Builds the app, ready for production, into the `build/` directory.<br />
It correctly bundles React in production mode and optimizes the build for the best performance - the build is minified and the filenames include the hashes.

### **`npm install`**

Upon cloning, pulling or checking out the repository, it is important to run `npm install` in order to acquire the dependencies listed in `package.json`.

## About React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app "Create React App GitHub repository")!
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started). <br>
To learn React, check out the [React documentation](https://reactjs.org/).
