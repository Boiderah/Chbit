const jwt = require("jsonwebtoken");

const generatetoken = (id) => {
  const token = jwt.sign(
    {
      id: id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  return token;
};

module.exports = generatetoken;
