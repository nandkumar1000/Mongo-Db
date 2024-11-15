

# MongoDB with Node.js and Express.js

Welcome to the **MongoDB** repository, showcasing how to integrate and work with **MongoDB** using **Node.js** and **Express.js**. This repository provides a step-by-step guide, examples of CRUD (Create, Read, Update, Delete) operations, and practical use cases in a real-world application.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [MongoDB Setup](#mongodb-setup)
- [Usage](#usage)
  - [Connecting MongoDB to Node.js](#connecting-mongodb-to-nodejs)
  - [CRUD Operations](#crud-operations)
- [Practical Example](#practical-example)
  - [Express.js API with MongoDB](#expressjs-api-with-mongodb)
  - [Postman Testing](#postman-testing)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This repository demonstrates how to use **MongoDB** in a **Node.js** environment, integrating it with the popular web framework **Express.js**. MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, allowing for fast development and scalability.

The project covers:
- How to connect a Node.js application to a MongoDB database.
- Performing CRUD operations on MongoDB collections.
- Building an API with Express.js that interacts with MongoDB.
  
## Features

- Easy setup and connection with MongoDB using `mongoose`, a powerful ODM (Object Data Modeling) library for MongoDB.
- Full CRUD functionality (Create, Read, Update, Delete).
- Error handling and validation for MongoDB operations.
- RESTful API example with Express.js.
  
## Technologies Used

- **MongoDB**: NoSQL database for storing data.
- **Node.js**: JavaScript runtime for server-side programming.
- **Express.js**: Minimalist web framework for building APIs and web applications.
- **Mongoose**: ODM library to interact with MongoDB in a simple and structured way.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/mongodb-node-express.git
```

2. Install dependencies:

```bash
cd mongodb-node-express
npm install
```

## MongoDB Setup

Make sure you have **MongoDB** installed and running locally or use a cloud-hosted MongoDB database (e.g., MongoDB Atlas). 

- To install MongoDB locally, follow the [MongoDB installation guide](https://docs.mongodb.com/manual/installation/).
- For MongoDB Atlas, create an account [here](https://www.mongodb.com/cloud/atlas) and generate a connection URI.

## Usage

### Connecting MongoDB to Node.js

In your Node.js project, you can connect to MongoDB using **Mongoose**.

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
```

### CRUD Operations

**Create (Insert)**, **Read (Retrieve)**, **Update**, and **Delete** operations are implemented using Mongoose.

#### Example Schema:

```javascript
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
```

#### Example CRUD Functions:

```javascript
// Create a new user
const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

// Read all users
const getUsers = async () => {
  return await User.find({});
};

// Update a user by ID
const updateUser = async (id, updateData) => {
  return await User.findByIdAndUpdate(id, updateData, { new: true });
};

// Delete a user by ID
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
```

## Practical Example

### Express.js API with MongoDB

Below is an example of how to build a simple **REST API** using **Express.js** and **MongoDB**.

#### `server.js`

```javascript
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

#### `routes/userRoutes.js`

```javascript
const express = require('express');
const { getUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// @route GET /api/users
router.get('/', getUsers);

// @route POST /api/users
router.post('/', createUser);

// @route PUT /api/users/:id
router.put('/:id', updateUser);

// @route DELETE /api/users/:id
router.delete('/:id', deleteUser);

module.exports = router;
```

### Postman Testing

To test your API endpoints, you can use **Postman**:
1. Start your server: `node server.js`
2. Open **Postman** and create requests for the following:
   - **GET**: `http://localhost:3000/api/users`
   - **POST**: `http://localhost:3000/api/users` (with JSON body to create a user)
   - **PUT**: `http://localhost:3000/api/users/:id` (with JSON body to update a user)
   - **DELETE**: `http://localhost:3000/api/users/:id`

## Folder Structure

```
├── config
│   └── db.js            # MongoDB connection setup
├── controllers
│   └── userController.js # CRUD functions for User
├── models
│   └── User.js          # User schema definition
├── routes
│   └── userRoutes.js    # API routes for User
├── server.js            # Main server file
└── package.json         # Project dependencies and scripts
```

