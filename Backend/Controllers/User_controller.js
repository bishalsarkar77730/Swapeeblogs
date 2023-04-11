import User from "../models/Users.js";

export const update = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const dataupdate = {
        username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
      };
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          ...dataupdate,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can update only your account!",
      success: false,
    });
  }
};

export const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been Deleted");
    } catch (error) {
      next(error);
    }
  } else {
    return res.status(400).json({
      message: "You can Delete only your account!",
      success: false,
    });
  }
};

export const getUser = async (req, res, next) => {
  if (req.params.id === req.user.id) {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  } else {
    return res.status(200).json({
      message: "You can access only your account!",
      success: false,
    });
  }
};

// Admin routes

export const getsingleUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ UuId: req.params.UuId });
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

export const getAllusers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const editUserRole = async (req, res, next) => {
  try {
    const newrole = {
      role: req.body.role,
    };

    const updatedrole = await User.findOneAndUpdate(req.params.UuId, newrole, {
      new: true,
    });
    res.status(200).json(updatedrole.role);
  } catch (error) {
    next(error);
  }
};

export const verifyuser = async (req, res, next) => {
  try {
    const profile = await User.findOne({ UuId: req.params.UuId });
    if (profile) {
      if (profile.verified == false) {
        profile.verified = true;
      } else if (profile.verified == true) {
        profile.verified = false;
      } else {
        profile.verified = profile.verified;
      }
      const result = await profile.save();
      return res.status(200).json(result.verified);
    }
  } catch (error) {
    return res.status(400).json({ message: "Verification Failed" });
  }
};
