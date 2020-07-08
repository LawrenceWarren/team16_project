//This code was written by Yutian Chen and Wenzheng Shan.

const express = require("express");
const contactRouter = express.Router();
const ContactModel = require("../model/Contact");
var nodemailer = require("nodemailer");
const creds = require("./emailConfig");

//Get All Route
contactRouter.get("/", async (_req, res) => {
  try {
    const contacts = await ContactModel.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Pass the credentials to the SMTP transport
var transport = {
  host: "smtp.gmail.com",
  post: 465,
  secure: true,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

// Once the transporter is set up and ready. We'll want to set up the post router to send the data that was received through the transporter.
var transporter = nodemailer.createTransport(transport);

transporter.verify((error, _success) => {
  if (error) {
    console.log("Contact: could not connect!");
  } else {
    console.log("Contact: Ready to send messages.");
  }
});

//Create One Post Route
contactRouter.post("/", async (req, res) => {
  const contact = new ContactModel({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phoneNum: req.body.phoneNum,
    message: req.body.message,
    registerDate: req.body.registerDate,
  });
  try {
    const newContact = await contact.save();
    res.status(201).json({ newContact });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }

  // The data that stored the mail information such as send, receive email address, subject and content.
  var mail = {
    from: creds.USER,
    to: req.body.email,
    subject: "Confirmation Email From Ava's Angels",
    html:
      "Hello " +
      req.body.firstname +
      ": <br/>" +
      "<h2> We have successfully received your form </h2>" +
      "<b>FirstName:</b> " +
      req.body.firstname +
      "<br/>" +
      "<b>LastName:</b> " +
      req.body.lastname +
      "<br/>" +
      "<b>email:</b> " +
      req.body.email +
      "<br/>" +
      "<b>phoneNumber:</b> " +
      req.body.phoneNum +
      "<br/>" +
      "<b>Message:</b> " +
      req.body.message +
      "<br/>" +
      "<br /><h3> Thanks agin for leaving your information with us </h3>",
  };

  //The send function.
  transporter.sendMail(mail, (err, _data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});

//Delete one
contactRouter.delete("/:id", function (req, res, next) {
  ContactModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    contactinfo
  ) {
    if (err) return next(err);
    res.json(contactinfo);
  });
});

module.exports = contactRouter;
