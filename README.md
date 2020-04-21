# README

[Master branch](https://avas-angels.herokuapp.com/ "Main project deployment")

[Develop branch](https://avas-angels-develop.herokuapp.com/ "Develop branch deployment")

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run devStart`

Runs the app in the development mode.<br />
Open [http://localhost:4000](http://localhost:3000) to view it in the browser.

From now on, everytime we save our files nodemon will automatically restarts the server!

### `npm install express mongoose`

Since this project use `Mongoose` object document modeler (ODM) to ineract with `MongoDB`, excute the above command line to scratch with the appropriate mongo dependencies.

### `npm --save-dev nodemon dotenv`

Because we will be using `nodemon` and `dotenv` packaged. Nodemon is a utility that will monitor for any changes in our source code and automatically restarts our server. Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env storing our configuration(vulnerable data) in the environment separate from our code.<br />

The above set of commands from the terminal will create a new package.json file and install Nodemon and Dotenv.

### `npm install nodemailer --save`

Make sure the nodemailer is installed to send email.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn how to create backend, check out the [Build a rest API with MongoDB, mongoose And Node.js using Async/Await](https://medium.com/@alicantorun/build-a-rest-api-with-mongodb-mongoose-and-node-js-3a5afc4a0431).

To learn how to connect backend with front end, check out the [How to create a React frontend and a Node/Express backend and connect them](https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/).

To learn how to send email automatically, check out the [Create a contact form with Nodemailer, React and Express](https://medium.com/@binhchung48/create-a-contact-form-with-nodemailer-react-js-and-express-js-7757d41e2448).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
