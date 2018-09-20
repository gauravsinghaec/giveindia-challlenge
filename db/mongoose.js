const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB successfully.'))
.catch((error) => console.log('Error while connecting to database:'+ error));

module.exports = mongoose;
