const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET || "rabbit-development-jwt-secret-change-in-production";

const createToken = (user) => jwt.sign(
  {
    user: {
      id: user._id,
      role: user.role
    }
  },
  jwtSecret,
  { expiresIn: "40h" }
);

module.exports = { jwtSecret, createToken };