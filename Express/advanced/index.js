const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const article = require("./routes/article");
const app = express();

// Customizing middleware는 반드시 next가 있어야함
app.use((req, res, next) => {
  mongoose
    .connect("mongodb://localhost/express-advanced", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true
    })
    .then(() => {
      console.log("DB connected!");
      next();
    })
    .catch(error => next(error)); // error를 다음 middleware로 넘김
});
app.use(express.json());
app.use("/api/user", user);
app.use("/api/article", article);
app.use(() => {
  mongoose.disconnect().then(() => console.log("DB Disconnected!"));
});

app.listen(3000, () => console.log("Server Running..."));
