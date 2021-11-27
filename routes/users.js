var express = require("express");
const UserModel = require("../models/user.model");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    let users = await UserModel.find();
    res.render("Users/index", { users: users });
  } catch (err) {
    throw err;
  }
});

/**
 * Route To Create New User
 */
router.get("/create", (req, res) => {
  res.render("Users/create");
});

/**
 * Method To Create New User
 */
router.post("/create", async (req, res) => {
  try {
    let newUser = req.body;
    await new UserModel(newUser).save();
    res.redirect("/users");
  } catch (err) {
    throw err;
  }
});

/**
 * Route To Edit User
 */
router.get('/edit/:userId', async(req, res)=>{
  try {
    let user = await UserModel.findOne({_id: req.params.userId});
    res.render('Users/edit', {user: user});
  } catch (err) {
    throw err;
  }
});

/**
 * Method To Edit New User
 */
 router.post("/edit", async (req, res) => {
  try {
    let user = req.body;
    await UserModel.findOneAndUpdate({_id: user._id}, user);
    res.redirect("/users");
  } catch (err) {
    throw err;
  }
});

/**
 * Delete User
 */
router.get('/delete/:userId', async(req, res)=>{
  try {
    await UserModel.findOneAndDelete({_id: req.params.userId});
    res.redirect("/users");
  } catch (err) {
    throw err;
  }
});


module.exports = router;
