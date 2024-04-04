const express = require('express');
const cors = require('cors');
const connectdb = require("./db");
const dotenv = require('dotenv');
const app = express();
const port = 4000;
const User = require("./models/userModel");


dotenv.config()
connectdb();
const user = [
    {
        email: 'gabby@gmail.',
        password: '<PASSWORD>',
        Name: 'musa james',
        country: 'USA',
        gender: 'trans',

    },
    {
        email: 'gabby@gmail.',
        password: '<PASSWORD>',
        Name: 'musa james',
        country: 'USA',
        gender: 'trans',

    },
    {
        email: 'gabby@gmail.',
        password: '<PASSWORD>',
        Name: 'musa james',
        country: 'USA',
        gender: 'trans',

    },

]

const countries = [
    {
        name: 'India',
        code: 'IN'
    },
    {
        name: 'USA',
        code: 'US'
    },
    {
        name: 'China',
        code: 'CN'
    },
    {
        name: 'Japan',
        code: 'JP'
    },
    {
        name: 'Germany',
        code: 'DE'
    },
    {
        name: 'France',
        code: 'FR'
    },
    {
        name: 'Brazil',
        code: 'BR'
    },
    {
        name: 'Russia',
        code: 'RU'
    },
    {
        name: 'South Korea',
        code: 'KR'
    },
    {
        name: 'Italy',
        code: 'IT'
    },
    {
        name: 'Spain',
        code: 'ES'
    },
    {
        name: 'Spain',
        code: 'ES'
    },
]
app.use(
    cors({
        origin: 'http://localhost:5173'
    })
)

app.post('/Login',(req, res) => {
    const { email, password } = req.body;
    // console.log(req.body);
    const user = user.find(u => u.email === email && u.password === password);
    if (user) {
        res.send({token:udheuiiejs.token});
    } else {
        res.status(401).send('Invalid credentials');
    }
}
)

app.get('/countries', (req, res) => {
    res.send(countries);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
}); 