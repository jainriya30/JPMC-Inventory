// Importing modules
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const {removeSensitiveData} = require("../utils/functions");

// Signup
const signup = async (req, res) => {
  try {

    let newUser = new User(req.body);
    await newUser.save();

    const token = await User.generatejwt(newUser._id);

    // Sending a response back
    res.status(201).json({
      message: "User Signed Up",
      data: {
        token,
        userType: newUser.type
      },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};


// Login
const login = async (req, res) => {
  try {
    let user = req.body.email ? await User.findOne({ email: req.body.email }) : await User.findOne({ phone: req.body.phone });
     
    if (!user) {
      res.status(404).json({
        message: "User not found!",
      });
      return;
    }

    const isMatch = await bcryptjs.compare(req.body.password, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid credentials!",
        
      });
      return;
    }

    const token = await User.generatejwt(user._id);

    user = removeSensitiveData(user);

    res.status(200).json({
      message: "User Verified!",
      token,
      userType: user.type
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      
    });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    const currentUser = req.user;
    const token = req.token;

    currentUser.tokens = currentUser.tokens.filter((usertoken) => {
      return usertoken.token !== token;
    });

    await currentUser.save();

    res.status(200).json({
      message: "Successfully logged out!",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Logout of all
const logoutAll = async (req, res) => {
  try {
    const currentUser = req.user;
    currentUser.tokens = [];
    await currentUser.save();

    res.status(200).json({
      message: "Successfully logged out of all sessions!",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Change Password
const changePassword = async (req, res) => {
  try {
    let user = await User.findById(req.user._id);
    if (!user) {
      res.status(404).json({
        message: "User not found!",
      });
      return;
    }

    const isMatch = await bcryptjs.compare(req.body.oldpassword, user.password);
    if (!isMatch) {
      res.status(401).json({
        message: "Invalid credentials!",
      });
      return;
    }

    user.password = await req.body.newpassword;
    await user.save();

    res.status(200).json({
      message: "Password changed!"
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// Exporting modules
module.exports = {
  signup,
  login,
  logout,
  logoutAll,
  changePassword,
};
