const express = require("express");
const cors = require("cors");
const connectdb = require("./db");
const dotenv = require("dotenv");
const app = express();
const port = 4000;
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();
connectdb();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://localhost:5176"],
  })
);

app.use(express.json());

// app.post('/Login', async (req, res) => {
//     const { email, password } = req.body;
//     console.log(req.body);
//     const user = await User.findOne({email});
//     console.log(user);
//     if (user.password === password) {
//         res.send([user, 'udheuiiejs.token']);
//     } else {
//         res.status(401).send('Invalid credentials');
//     }
// }
// )
// app.post('/signup', async (req, res) => {
//     const { email, password, fullName, phoneNumber } = req.body;
//     console.log(email, password, fullName);

//     const user = await User.findOne({email});
//     console.log(user);
//     if(user){res.status(401).send("Email already in use")}
//     else{

//         const newUser = User.create({
//             email: email,
//             password: password,
//             fullName: fullName,
//             phoneNumber: phoneNumber
//         })

//         if(newUser){res.send('successfully created')}
//     }
// }
// )

app.use("/user", userRoutes);
app.use("/transaction", transactionRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
