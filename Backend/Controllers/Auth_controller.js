import User from "../models/Users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const validateUsername = async (username) => {
  const user = await User.findOne({ username });
  return user ? false : true;
};

export const signup = async (req, res, next) => {
  try {
    const usernameNotTaken = await validateUsername(req.body.username);
    if (!usernameNotTaken) {
      return res.status(400).json({
        message: "username is already taken",
        success: false,
      });
    }

    function makeid(length) {
      var result = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    }

    const newdata = {
      UuId: makeid(6),
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
    };

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...newdata, password: hash });
    await newUser.save();
    res.status(200).send("user has been created please Login");
  } catch (error) {
    next(error);
  }
};

// login user
export const signin = async (req, res, next) => {
  try {
    const { username } = req.body;
    if (!username) {
      return res.status(400).json({
        message: "please Enter Username & password",
        success: false,
      });
    }
    const user = await User.findOne({ username }).select("+password");
    if (!user) {
      return res.status(401).json({
        message: "User not found",
        success: false,
      });
    }
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(401).json({
        message: "Invalid Username or password",
        success: false,
      });
    }
    const token = jwt.sign(
      {
        id: user._id,
        uuid: user.UuId,
        role: user.role,
        verified: user.verified,
      },
      process.env.JWT
    );
    // const details = user
    return res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 10 * 60 * 60 * 1000,
      })
      .status(200)
      .json(user);
  } catch (error) {
    next(error);
  }
};

// Reset password

export const resetPassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        message: "please enter current and new password",
        success: false,
      });
    }
    // console.log(req.user._id)
    const user = await User.findById(req.params.id).select("+password");
    
    const isCorrect = await bcrypt.compare(currentPassword, user.password);
    if (!isCorrect) {
      return res.status(401).json({
        message: "Current password is incorrect",
        success: false,
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt);
    user.password = hash;
    await user.save();
    res.status(200).json({
      message: "password has been updated",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while resetting the password",
      success: false,
    });
  }
};

// logout

export const LogOut = (req, res, next) => {
  try {
    res.cookie("access_token", null, {
      expiresIn: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: "Logged Out",
    });
  } catch (error) {
    next(error);
  }
};
