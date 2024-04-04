const MONGOOSE = require('mongoose');

const connectdb = async () => {
try{
    const conn = await MONGOOSE.connect(`${process.env.MONGO_URL}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to ${conn.connection.host}`);
}catch(error){
    console.log(`error connecting ${error.message}`);
    process.exit(1);
}
};

module.exports = connectdb;