const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost:27017/noderest", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });
} catch (err) {
  console.log("oi");
}
mongoose.Promise = global.Promise;

module.exports = mongoose;
