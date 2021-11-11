const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:devjams@cluster0.gmuod.mongodb.net/task-manager-api?retryWrites=true&w=majority', {
  useNewUrlParser: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const User = mongoose.model('User', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

const me = new User({
  name: "Avni Tyagi",
  age: 13
})

me.save().then((me) => {
  console.log("SENT ->", me)
}).catch((e) => {
  console.log(e)
})