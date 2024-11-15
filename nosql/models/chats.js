const mongoose = require("mongoose");

const chatsschema = new mongoose.Schema({
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    maxLength: 50,
  },
  status: {
    type: Boolean,
    default: false,
  },
  read: {
    type: Boolean,
    default: false
  },
  created_at: {
    type: Date,
    required: true,
  },
});

const Chat = mongoose.model("Chat", chatsschema);
module.exports = Chat