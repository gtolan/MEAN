'use strict';
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport();
/**
 * Render the main application page
 */
exports.renderIndex = function (req, res) {
  res.render('modules/core/server/views/index', {
    user: req.user || null
  });
};

/**
 * Render the server error page
 */
exports.renderServerError = function (req, res) {
  res.status(500).render('modules/core/server/views/500', {
    error: 'Oops! Something went wrong...'
  });
};

/**
 * Render the server not found responses
 * Performs content-negotiation on the Accept HTTP header
 */
exports.renderNotFound = function (req, res) {

  res.status(404).format({
    'text/html': function () {
      res.render('modules/core/server/views/404', {
        url: req.originalUrl
      });
    },
    'application/json': function () {
      res.json({
        error: 'Path not found'
      });
    },
    'default': function () {
      res.send('Path not found');
    }
  });
};

/**
 * Waiting list submission
 * 
 */
exports.sendMail = function (req, res) {
  var data = req.body;
  var mailOptions = {
    from: data.waitingListUser,
    to: "contact@fluxcard.io",
    subject: data.subject
  };
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log('error');
    }
    console.log('Message sent:' + info.response);
  });
  res.json(data);
};