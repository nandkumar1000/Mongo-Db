const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful ")).catch(err => console.log('err'));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const userSchema = new Schema({
  usename: String,
  email: String
});

const postSchema = new Schema({
  content: String,
  like: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
  let user1 = new User({
    usename: "user1",
    email: "user1@gmail.com"
  })
  let post1 = new Post({
    content: "hello",
    like: 0,
  })
  user1.posts.push(post1);
  await user1.save();
  await Post1.save();
}
addData();

const getData = async () => {
  let result = await Post.findOne({}).populate("user", "username");
  console.log(result);
};
getData();