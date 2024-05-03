const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
// register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //   validation
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "please fill all the field",
      });
    }
    //   exisiting user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exist",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //   save user
    const user = new userModel({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();
    return res.status(200).send({
      success: true,
      message: "New user Created",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in register failed",
      success: false,
      error,
    });
  }
};

// get all user
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all user data",
      users,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: "Error in get all user",
      success: false,
      error,
    });
  }
};

// login user
exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // validation email
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Provide email or password",
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "Email is not registered",
      });
    }
    //  validation password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid username or password",
      });
      }
      return res.status(200).send({
          success: true,
          message: "login successfully",
          user,
      })
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "login failed due to incorrect credintial",
      error,
    });
  }
};
