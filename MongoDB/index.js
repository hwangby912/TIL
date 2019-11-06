const mongoose = require("mongoose");

// playground라는 DB(RDB 기준 Schema)를 만듦
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected"))
  .catch(error => console.error(error));

// Collection에 대한 규격을 만듦
const authorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true }
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: authorSchema,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, default: 10, max: 50 }
});

// Author라는 Collection(RDB로는 Table) 생성
// -> MongoDB에서 Collection을 만들때 자동으로 복수형 이름으로 만듦
// Collection이 없다면 새로 만들고, 있다면 그대로 참조함
const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);

// Document 추가하기 CRUD 중 Create
const author = new Author({
  name: "Hwang",
  email: "quddbs912@naver.com"
});

const course = new Course({
  name: "Express API",
  author: author,
  tags: ["nodeJS", "Express", "mongoDB"],
  isPublished: true,
  price: 30
});

author.save().then(result => console.log(result));
course.save().then(result => console.log(result));
