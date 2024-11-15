const mongoose = require("mongoose")

const schoolschema = new mongoose.Schema(
  {
    name: "String",
    location: "String",
    students: [
      {
        name: "String",
        age: Number,
        grade: Number
      },
    ]
  }

)
module.exports = mongoose.model("school", schoolschema)