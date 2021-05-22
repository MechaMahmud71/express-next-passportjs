const mongoose = require('mongoose');

const connectDB = async () => {
  const connection = await mongoose.connect(`mongodb://localhost:27017/experss-next-passportjs`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  console.log(`Mongodb is connected`.yellow.bold);
}

module.exports = connectDB