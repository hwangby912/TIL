const mongoose = require("mongoose");
const { schema, connect, model } = mongoose;
let con = null;

// IIFE(함수를 선언하자마자 실행하는 것(단 한 번만 함))
// async await 함수를 쓰기 위함
(async () => {
  try {
    // DB 생성
    con = await connect(
      "mongodb://localhost/real",
      { useNewUrlParser: true }
    );

    // User Collection의 type 설정
    const userSchema = new mongoose.Schema({
      name: String,
      email: { type: String, require: true, unique: true },
      nickname: String
    });
    const User = model("User", userSchema);

    // Create
    const user1 = new User({
      name: "Hwang",
      email: "quddbs912@naver.com",
      nickname: "메이플충"
    });
    const user2 = new User({
      name: "ByeongYoon",
      email: "nightroad@naver.com",
      nickname: "나로충"
    });
    const res1 = await user1.save();
    const res2 = await user2.save();
    console.log("Save Result: ", res1, res2);

    // Read
    const users = await User.find();
    // 1번째 user -> update, 2번째 user -> delete
    const updated = await User.updateOne(
      { _id: users[1]._id },
      { nickname: "나로짱짱맨" }
    );
    console.log("Update Result", updated);

    // Delete
    const deleted = await User.deleteOne({ _id: users[0]._id });

    const finalUsers = await User.find();
    console.log("Final Result : ", finalUsers);
  } catch (error) {
    console.error(error);
  } finally {
    // 무조건 맨 마지막에는 disconnect를 수행함
    if (con) con.disconnect();
  }
})();
