const User = require("../models/userModel");
const generatetoken = require("../utility/generatetokenutility");

const registerUser = async (req, res) => {
  const { email, password, fullName, phoneNumber } = req.body;
  if (!email || !password || !fullName) {
    return res.status(400).send("Please fill all the fields");
  }
  console.log(email, password, fullName);

  const user = await User.findOne({ email });
  console.log(user);

  if (user) {
    res.status(401).send("Email already in use");
  } else {
    const newUser = await User.create({
      email: email,
      password: password,
      fullName: fullName,
      phoneNumber: phoneNumber,
    });

    if (newUser) {
      res.send({ message: "successfully created" });
    }
  }
};

const authUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).send("Please fill all the fields");
  }

  const user = await User.findOne({ email });
  console.log(user);
  if (!user) {
    return res.status(401).send("User does not exist");
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.status(200).json({
    message: "successfully authenticated",
    token: generatetoken({
      id: user._id,
      email: user.email,
      fullName: user.fullName,
    }),
  });
};

module.exports = { registerUser, authUser };
