const User = require("../models/userModel");


const registerUser = async (req,res) => {
    const { email, password, fullName, phoneNumber } = req.body;
    console.log(email, password, fullName);
    
    const user = await User.findOne({email});
    console.log(user);
    if(user){res.status(401).send("Email already in use")}
    else{
        
        const newUser = User.create({
            email: email,
            password: password,
            fullName: fullName,
            phoneNumber: phoneNumber
        })
        
        if(newUser){res.send({message:'successfully created'})}
    }
}

const authUser = async (req,res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({email});
    console.log(user);
    if (user.password === password) {
        res.send([user, 'udheuiiejs.token']);
    } else {
        res.status(401).send('Invalid credentials');
    }
}


module.exports = {registerUser, authUser}