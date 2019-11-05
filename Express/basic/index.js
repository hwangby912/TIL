const express = require("express");
const app = express();

const courses = [
  { id: 1, name: "HBY" },
  { id: 2, name: "Real Artist Ship" },
  { id: 3, name: "See the invisible" }
];

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("It is HBY");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(ele => {
    return ele.id === id;
  });

  if (!course) {
    res.status(404).send("This course is not exist");
  } else {
    res.send(`<h1>${course}</h1>`);
  }
});

app.post("/api/course", (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(courses);
});

// 일부만 수정(patch)
app.patch("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(ele => {
    return ele.id === id;
  });
  if (!course) {
    res.send("This course is not exist");
  } else {
    const name = req.body.name;
    course.name = name;
  }
});

app.delete("/api/course/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const course = courses.find(ele => {
    return ele.id === id;
  });
  if (!course) {
    res.send("This course is not exist");
  } else {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
  }
});

const port = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Listening on port ${port}`);
});
