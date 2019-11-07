const express = require("express");
const app = express();

const users = [
  { id: "hwang", name: "byeongyoon", password: "1234" },
  { id: "kakao", name: "ryan", password: "7890" }
];

const session = [];
let sessionCount = 0;
app.use(express.json());

app.post("/login", (req, res) => {
  const { id, password } = req.body;
  const user = users.find(u => {
    if (u.id === id && u.password === password) return true;
    return false;
  });
  if (user) {
    const userSession = {
      id,
      staer: new Date(),
      sessionCount
    };
    res.send(sessionCount.toString());
    sessionCount++;
    session.push(userSession);
  } else {
    res.send("ID and Password Check");
  }
});

app.get("/my/:sc", (req, res) => {
  if (req.params.sc) {
    const userSession = session.find(
      ele => ele.sessionCount === parseInt(req.params.sc)
    );
    if (userSession) {
      res.send("confidentiall information");
    } else {
      res.send("please login again");
    }
  } else {
    res.send("please login");
  }
});

app.listen(3000, () => console.log("Server Running"));
