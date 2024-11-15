const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const path = require('path');
const Chat = require("./models/chats.js");
const methodOverride = require("method-override");
// MongoDB connection
main().then(() => {
  console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// For parsing data
app.use(express.urlencoded({ extended: true }));

// for using method-override
app.use(methodOverride("_method"));

// Default route
app.get("/", (req, res) => {
  res.send("Route is working");
});

// Index route
app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find();
    res.render('index.ejs', { chats });
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching chats");
  }
});
// get new route for post method
app.get("/chats/new", (req, res) => {
  res.render('new.ejs');
})
// Create route
app.post("/chats", async (req, res) => {
  try {
    let { from, to, message } = req.body;

    let newChat = new Chat({
      from: from,
      to: to,
      message: message,
      created_at: new Date()
    });
    newChat.save().then(res => { console.loc("chat was saved") }).catch(err => { console.log('err') })
    res.redirect('/chats');

  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating chat");
  }
});

// edit route
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs", { chat });
})

// update route
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message: newmessage } = req.body;
  let updatedchat = await Chat.findByIdAndUpdate(id, { message: newmessage }, { runValidators: true, new: true })
  console.log(updatedchat);
  res.redirect("/chats")
});

// destroy route
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let deletedchat = await Chat.findByIdAndDelete(id);
  console.log(deletedchat);
  res.redirect("/chats");
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
