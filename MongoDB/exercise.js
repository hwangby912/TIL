const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/exercise-basic", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB Connected"))
  .catch(error => console.error(error));

const schema = mongoose.Schema();

const Course = mongoose.model("Course", schema);

// My answer
async function read1() {
  const isPublish = await Course.find({ isPublished: true })
    .where("tags")
    .in(["backend"])
    .sort({ name: 1 })
    .select({ name: 1, author: 1 });
  console.log(isPublish);
}

async function read2() {
  const isPublish = await Course.find()
    .where("isPublished")
    .equals(true)
    .where("tags")
    .in(["backend", "frontend"])
    .sort("-price")
    .select("name price");
  console.log(isPublish);
}

async function read3() {
  const isPublish = await Course.find({ name: /js/i })
    .where("price")
    .gte(15);
  console.log(isPublish);
}

read1();
read2();
read3();

// Teacher answer
Course.find({ isPublished: true })
  .where("tags")
  .in(["backend"])
  .select({ name: 1, author: 1 })
  .then(result => console.log("answer1 : ", result));

async function answer2() {
  const result = await Course.find({
    isPublished: true,
    tags: { $in: ["frontend", "backend"] }
  })
    .sort("-price")
    .select("name price");
  console.log("answer2", result);
}

Course.find()
  .where("price")
  .gte(15)
  .where("name")
  .regex(/js/i)
  .then(result => console.log("answer3", result));

answer2();
