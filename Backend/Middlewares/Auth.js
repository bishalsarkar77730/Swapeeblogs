import jwt from "jsonwebtoken";

export const authenticatedAndVerifiedUser = async (req, res, next) => {
  const { access_token } = req.cookies;
  const { JWT } = process.env;

  if (!access_token) {
    return res.status(401).json({
      message: "You are not authorized",
      success: false,
    });
  }

  try {
    const user = await jwt.verify(access_token, JWT);
    if (!user.verified) {
      return res.status(401).json({
        message: `You are not verified by Admin. Please verify your account first.`,
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Token is not valid",
      success: false,
    });
  }
};

export const verifyRole = (...roles) => {
  return async (req, res, next) => {
    const { access_token } = req.cookies;
    const { JWT } = process.env;

    try {
      const user = await jwt.verify(access_token, JWT);
      if (!roles.includes(user.role)) {
        return res.status(401).json({
          message: `Role: ${user.role} is not allowed to access this resource`,
        });
      }
      next();
    } catch (error) {
      return res.status(401).json({
        message: "Token is not valid",
        success: false,
      });
    }
  };
};
