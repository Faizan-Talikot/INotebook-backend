const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const Suggestion = require("../models/Suggestion");

// ROUTE 1: create a suggestion using post : "api/suggestion/createsuggestion". no login required
router.post("/createsuggestion" ,[
    body("email", "Enter a valid email").isEmail(), 
    body("description", "description must be atleast 5 characters").isLength({ min: 5 })], async (req, res) => {
  let success = false;
  // if there are errors, return Bad request and the errors
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ success, errors: error.array() });
  }
  // check whether the user with this email already exists
  try {
     await Suggestion.create({
      email: req.body.email,
      description: req.body.description,
    });

    success = true;
    //  res.json(user)
    res.json({ success});
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server error");
  }
  // .then(user => res.json(user))
  // .catch(err => {console.log(err)
  // res.json({error : 'please enter a unique value'})})
});

module.exports = router
