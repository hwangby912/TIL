const mongoose = require("mongoose");

// playground라는 DB(RDB 기준 Schema)를 만듦
mongoose
  .connect("mongodb://localhost/playground", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
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

// CRUD 중 Create
async function create() {
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

  const authorSaveResult = await author.save();
  console.log(authorSaveResult);
  const courseSaveResult = await course.save();
  console.log(courseSaveResult);
}

// create();

// CRUD 중 Read
async function read() {
  const authors = await Author.find();
  console.log(authors);

  // 최대 3개만 뽑아오고 name은 내림차순이며 name과 tags만 뽑아옴
  const courses = await Course.find({ isPublished: true })
    .limit(3)
    .sort({ name: -1 })
    .select({ name: 1, tags: 1 });
  console.log(courses);

  // price > 15, tags는 nodeJS와 Express가 있는 것들을 뽑아옴
  const courses2 = await Course.find(
    {
      price: { $gt: 15 },
      tags: { $in: ["nodeJS", "Express"] }
    },
    // name, tags, price를 뽑아옴
    {
      name: 1,
      tags: 1,
      price: 1
    }
  );

  //
  const courses3 = await Course.find()
    .where("isPublished")
    .equals(true)
    .where("tags")
    .in(["nodeJS", "Express"])
    .where("price")
    .gt(15)
    .sort("-name")
    .select("name tags price");
}

// read();

// CRUD 중 Update
// 2가지 방법이 있음
// 1. 데이터를 조회해서 수정한 후 저장
// 2. 바로 수정하는 방법
async function update() {
  // 1번 방법
  const course = await Course.findById("5dc2595ee06b5326008b663d");
  course.name = "JSON Array";
  await course.save();
}

// update();

async function update2() {
  const updated = await Course.updateMany({ isPublished: true }, { price: 30 });
  console.log(updated);
}

// update2();

// CRUD 중 Delete
async function remove() {
  const deleted = await Course.deleteOne({ id: "5dc2595ee06b5326008b663d" });
  console.log(deleted);
}

remove();
