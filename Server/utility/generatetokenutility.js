const jwt = require('jasonwebtoken');


const generatetoken = (id) => {
    const token = jwt.sign({
        id: id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '1d'
    })
    return token
}

module.export = generatetoken;