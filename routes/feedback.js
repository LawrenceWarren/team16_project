//This page was written by Junhao Zhang and changed slightly by Lawrence Warren

const express = require("express");
const feedbackRouter = express.Router();
const FeedbackModel = require("../model/Feedback");
var nodemailer = require("nodemailer");
const creds = require("./emailConfig");

//Get All Route
feedbackRouter.get("/", async (_req, res) => {
  try {
    const feedback = await FeedbackModel.find();
    res.json(feedback);
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
    console.log("Feedback: Could not connect!");
  } else {
    console.log("Feedback: Ready to send messages.");
  }
});

//Create One Post Route
feedbackRouter.post("/", async (req, res) => {
  const feedback = new FeedbackModel({
    experience: req.body.experience,
    comment: req.body.comment,
    name: req.body.name,
    email: req.body.email,
    registerDate: req.body.registerDate,
  });
  try {
    const newFeedback = await feedback.save();
    res.status(201).json({ newFeedback });
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
      req.body.name +
      ": <br/>" +
      "<h2> We have successfully received your form </h2>" +
      "<b>experience:</b> " +
      req.body.experience +
      "<br/>" +
      "<b>comment:</b> " +
      req.body.comment +
      "<br/>" +
      "<b>email:</b> " +
      req.body.email +
      "<br/>" +
      "<br /><h3> Thanks again for leaving your information with us </h3>",
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
feedbackRouter.delete("/:id", function (req, res, next) {
  FeedbackModel.findByIdAndRemove(req.params.id, req.body, function (
    err,
    feedbackinfo
  ) {
    if (err) return next(err);
    res.json(feedbackinfo);
  });
});

module.exports = feedbackRouter;
