const mongoose = require("mongoose");
const chat = require("./models/chats.js")
main().then(() => { console.log("connection succesfull") })
  .catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chats = [
  { from: "alice", to: "bob", message: "Hey, what's up?", status: true, read: false, created_at: new Date() },
  { from: "bob", to: "alice", message: "Not much, just chilling.", status: true, read: true, created_at: new Date() },
  { from: "charlie", to: "dave", message: "How's the project going?", status: false, read: false, created_at: new Date() },
  { from: "dave", to: "charlie", message: "It's almost done, you?", status: true, read: true, created_at: new Date() },
  { from: "eve", to: "frank", message: "Can we catch up later?", status: true, read: false, created_at: new Date() },
  { from: "frank", to: "eve", message: "Sure, how about tomorrow?", status: false, read: true, created_at: new Date() },
  { from: "grace", to: "heidi", message: "I'll send the report soon.", status: true, read: false, created_at: new Date() },
  { from: "heidi", to: "grace", message: "Great, looking forward to it.", status: true, read: true, created_at: new Date() },
  { from: "ivan", to: "judy", message: "Are you coming to the meeting?", status: true, read: false, created_at: new Date() },
  { from: "judy", to: "ivan", message: "Yes, I'll be there on time.", status: true, read: true, created_at: new Date() },
  { from: "kim", to: "leo", message: "Did you finish the task?", status: false, read: false, created_at: new Date() },
  { from: "leo", to: "kim", message: "Almost done, give me an hour.", status: true, read: false, created_at: new Date() },
  { from: "mike", to: "nina", message: "Can you review my code?", status: true, read: true, created_at: new Date() },
  { from: "nina", to: "mike", message: "Sure, send it over.", status: false, read: false, created_at: new Date() },
  { from: "oscar", to: "peter", message: "Do you have the files?", status: true, read: true, created_at: new Date() },
  { from: "peter", to: "oscar", message: "I'll send them tonight.", status: false, read: false, created_at: new Date() },
  { from: "quinn", to: "rachel", message: "Can we discuss the budget?", status: true, read: true, created_at: new Date() },
  { from: "rachel", to: "quinn", message: "Yes, let's do it at 3 PM.", status: false, read: false, created_at: new Date() },
  { from: "sam", to: "tina", message: "Are we meeting today?", status: true, read: true, created_at: new Date() },
  { from: "tina", to: "sam", message: "Yes, at the usual spot.", status: true, read: true, created_at: new Date() },
  { from: "uma", to: "victor", message: "What time is the event?", status: true, read: false, created_at: new Date() },
  { from: "victor", to: "uma", message: "It's at 6 PM, see you there.", status: true, read: true, created_at: new Date() },
  { from: "wendy", to: "xander", message: "Can you share the document?", status: true, read: false, created_at: new Date() },
  { from: "xander", to: "wendy", message: "I'll send it shortly.", status: false, read: true, created_at: new Date() },
  { from: "yara", to: "zane", message: "Do you have a minute?", status: true, read: true, created_at: new Date() },
  { from: "zane", to: "yara", message: "Yes, let's talk now.", status: true, read: false, created_at: new Date() },
  { from: "adam", to: "beth", message: "Is everything set for tomorrow?", status: true, read: true, created_at: new Date() },
  { from: "beth", to: "adam", message: "Yes, all good to go.", status: true, read: true, created_at: new Date() },
  { from: "carl", to: "diana", message: "When will the update be ready?", status: true, read: false, created_at: new Date() },
  { from: "diana", to: "carl", message: "By the end of the day.", status: false, read: true, created_at: new Date() }
];

chat.insertMany(chats)
// chat1.save.then((res) => { console.log(res) });