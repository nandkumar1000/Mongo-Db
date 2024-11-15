const mongoose = require('mongoose');
const { Schema } = mongoose;

main().then(() => console.log("connection successful ")).catch(err => console.log('err'));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/RelationDemo');
}

const userSchema = new Schema({
  usename: String,
  address: [
    {
      location: String,
      city: String
    },
  ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async () => {
  let user1 = new User({
    usename: "Nand",
    address: [
      {
        location: "123 , karnatak",
        city: "Bangalore"
      },
    ]
  })
  let result = await user1.save();
  console.log(result)
}
addUsers();
