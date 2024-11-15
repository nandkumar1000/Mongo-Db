const express = require('express');
const app = express();
const mongooseConnect = require('./config/mongoose');
const User = require('./models/user');
const Employee = require("./models/employee");
const School = require("./models/school");

app.get('/', async (req, res) => {
  try {
    const user = await User.create(
      [
        {
          name: 'shiva',
          email: 'nand23@gmail.com',
          password: 2347242432
        },
        { "name": "Shiva 1", "email": "shiva1@gmail.com", "password": 1234567890 },
        { "name": "Shiva 2", "email": "shiva2@gmail.com", "password": 1234567891 },
        { "name": "Shiva 3", "email": "shiva3@gmail.com", "password": 1234567892 },
        { "name": "Shiva 4", "email": "shiva4@gmail.com", "password": 1234567893 },
        { "name": "Shiva 5", "email": "shiva5@gmail.com", "password": 1234567894 },
        { "name": "Shiva 6", "email": "shiva6@gmail.com", "password": 1234567895 },
        { "name": "Shiva 7", "email": "shiva7@gmail.com", "password": 1234567896 },
        { "name": "Shiva 8", "email": "shiva8@gmail.com", "password": 1234567897 },
        { "name": "Shiva 9", "email": "shiva9@gmail.com", "password": 1234567898 },
        { "name": "Shiva 10", "email": "shiva10@gmail.com", "password": 1234567899 },
        { "name": "Shiva 11", "email": "shiva11@gmail.com", "password": 1234567900 },
        { "name": "Shiva 12", "email": "shiva12@gmail.com", "password": 1234567901 },
        { "name": "Shiva 13", "email": "shiva13@gmail.com", "password": 1234567902 },
        { "name": "Shiva 14", "email": "shiva14@gmail.com", "password": 1234567903 },
        { "name": "Shiva 15", "email": "shiva15@gmail.com", "password": 1234567904 },
        { "name": "Shiva 16", "email": "shiva16@gmail.com", "password": 1234567905 },
        { "name": "Shiva 17", "email": "shiva17@gmail.com", "password": 1234567906 },
        { "name": "Shiva 18", "email": "shiva18@gmail.com", "password": 1234567907 },
        { "name": "Shiva 19", "email": "shiva19@gmail.com", "password": 1234567908 },
        { "name": "Shiva 20", "email": "shiva20@gmail.com", "password": 1234567909 },
        { "name": "Shiva 21", "email": "shiva21@gmail.com", "password": 1234567910 },
        { "name": "Shiva 22", "email": "shiva22@gmail.com", "password": 1234567911 },
        { "name": "Shiva 23", "email": "shiva23@gmail.com", "password": 1234567912 },
        { "name": "Shiva 24", "email": "shiva24@gmail.com", "password": 1234567913 },
        { "name": "Shiva 25", "email": "shiva25@gmail.com", "password": 1234567914 },
        { "name": "Shiva 26", "email": "shiva26@gmail.com", "password": 1234567915 },
        { "name": "Shiva 27", "email": "shiva27@gmail.com", "password": 1234567916 },
        { "name": "Shiva 28", "email": "shiva28@gmail.com", "password": 1234567917 },
        { "name": "Shiva 29", "email": "shiva29@gmail.com", "password": 1234567918 },
        { "name": "Shiva 30", "email": "shiva30@gmail.com", "password": 1234567919 },
        { "name": "Shiva 31", "email": "shiva31@gmail.com", "password": 1234567920 },
        { "name": "Shiva 32", "email": "shiva32@gmail.com", "password": 1234567921 },
        { "name": "Shiva 33", "email": "shiva33@gmail.com", "password": 1234567922 },
        { "name": "Shiva 34", "email": "shiva34@gmail.com", "password": 1234567923 },
        { "name": "Shiva 35", "email": "shiva35@gmail.com", "password": 1234567924 },
        { "name": "Shiva 36", "email": "shiva36@gmail.com", "password": 1234567925 },
        { "name": "Shiva 37", "email": "shiva37@gmail.com", "password": 1234567926 },
        { "name": "Shiva 38", "email": "shiva38@gmail.com", "password": 1234567927 },
        { "name": "Shiva 39", "email": "shiva39@gmail.com", "password": 1234567928 },
        { "name": "Shiva 40", "email": "shiva40@gmail.com", "password": 1234567929 },
        { "name": "Shiva 41", "email": "shiva41@gmail.com", "password": 1234567930 },
        { "name": "Shiva 42", "email": "shiva42@gmail.com", "password": 1234567931 },
        { "name": "Shiva 43", "email": "shiva43@gmail.com", "password": 1234567932 },
        { "name": "Shiva 44", "email": "shiva44@gmail.com", "password": 1234567933 },
        { "name": "Shiva 45", "email": "shiva45@gmail.com", "password": 1234567934 },
        { "name": "Shiva 46", "email": "shiva46@gmail.com", "password": 1234567935 },
        { "name": "Shiva 47", "email": "shiva47@gmail.com", "password": 1234567936 },
        { "name": "Shiva 48", "email": "shiva48@gmail.com", "password": 1234567937 },
        { "name": "Shiva 49", "email": "shiva49@gmail.com", "password": 1234567938 },
        { "name": "Shiva 50", "email": "shiva50@gmail.com", "password": 1234567939 },
        { "name": "Shiva 51", "email": "shiva51@gmail.com", "password": 1234567940 },
        { "name": "Shiva 52", "email": "shiva52@gmail.com", "password": 1234567941 },
        { "name": "Shiva 53", "email": "shiva53@gmail.com", "password": 1234567942 },
        { "name": "Shiva 54", "email": "shiva54@gmail.com", "password": 1234567943 },
        { "name": "Shiva 55", "email": "shiva55@gmail.com", "password": 1234567944 },
        { "name": "Shiva 56", "email": "shiva56@gmail.com", "password": 1234567945 },
        { "name": "Shiva 57", "email": "shiva57@gmail.com", "password": 1234567946 },
        { "name": "Shiva 58", "email": "shiva58@gmail.com", "password": 1234567947 },
        { "name": "Shiva 59", "email": "shiva59@gmail.com", "password": 1234567948 },
        { "name": "Shiva 60", "email": "shiva60@gmail.com", "password": 1234567949 },
        { "name": "Shiva 61", "email": "shiva61@gmail.com", "password": 1234567950 },
        { "name": "Shiva 62", "email": "shiva62@gmail.com", "password": 1234567951 },
        { "name": "Shiva 63", "email": "shiva63@gmail.com", "password": 1234567952 },
        { "name": "Shiva 64", "email": "shiva64@gmail.com", "password": 1234567953 },
        { "name": "Shiva 65", "email": "shiva65@gmail.com", "password": 1234567954 },
        { "name": "Shiva 66", "email": "shiva66@gmail.com", "password": 1234567955 },
        { "name": "Shiva 67", "email": "shiva67@gmail.com", "password": 1234567956 }
      ]
    )
    res.send(user)
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating employee');
  }
})
app.get("/employee", async (req, res) => {
  try {
    const employee = await Employee.create(

      [
        {
          name: "nand kumar sahu",
          email: "nandkumar.sahu@gmail.com",
          role: "sde",
          password: 123456
        },
        {
          "name": "Employee 1",
          "email": "employee1@company.com",
          "role": "SDE",
          "password": 123457
        },
        {
          "name": "Employee 2",
          "email": "employee2@company.com",
          "role": "SDE",
          "password": 123458
        },
        {
          "name": "Employee 3",
          "email": "employee3@company.com",
          "role": "SDE",
          "password": 123459
        },
        {
          "name": "Employee 4",
          "email": "employee4@company.com",
          "role": "SDE",
          "password": 123460
        },
        {
          "name": "Employee 5",
          "email": "employee5@company.com",
          "role": "Manager",
          "password": 123461
        },
        {
          "name": "Employee 6",
          "email": "employee6@company.com",
          "role": "SDE",
          "password": 123462
        },
        {
          "name": "Employee 7",
          "email": "employee7@company.com",
          "role": "SDE",
          "password": 123463
        },
        {
          "name": "Employee 8",
          "email": "employee8@company.com",
          "role": "SDE",
          "password": 123464
        },
        {
          "name": "Employee 9",
          "email": "employee9@company.com",
          "role": "SDE",
          "password": 123465
        },
        {
          "name": "Employee 10",
          "email": "employee10@company.com",
          "role": "Manager",
          "password": 123466
        },
        {
          "name": "Employee 11",
          "email": "employee11@company.com",
          "role": "SDE",
          "password": 123467
        },
        {
          "name": "Employee 12",
          "email": "employee12@company.com",
          "role": "SDE",
          "password": 123468
        },
        {
          "name": "Employee 13",
          "email": "employee13@company.com",
          "role": "SDE",
          "password": 123469
        },
        {
          "name": "Employee 14",
          "email": "employee14@company.com",
          "role": "SDE",
          "password": 123470
        },
        {
          "name": "Employee 15",
          "email": "employee15@company.com",
          "role": "Manager",
          "password": 123471
        },
        {
          "name": "Employee 16",
          "email": "employee16@company.com",
          "role": "SDE",
          "password": 123472
        },
        {
          "name": "Employee 17",
          "email": "employee17@company.com",
          "role": "SDE",
          "password": 123473
        },
        {
          "name": "Employee 18",
          "email": "employee18@company.com",
          "role": "SDE",
          "password": 123474
        },
        {
          "name": "Employee 19",
          "email": "employee19@company.com",
          "role": "SDE",
          "password": 123475
        },
        {
          "name": "Employee 20",
          "email": "employee20@company.com",
          "role": "Manager",
          "password": 123476
        },
        {
          "name": "Employee 21",
          "email": "employee21@company.com",
          "role": "SDE",
          "password": 123477
        },
        {
          "name": "Employee 22",
          "email": "employee22@company.com",
          "role": "SDE",
          "password": 123478
        },
        {
          "name": "Employee 23",
          "email": "employee23@company.com",
          "role": "SDE",
          "password": 123479
        },
        {
          "name": "Employee 24",
          "email": "employee24@company.com",
          "role": "SDE",
          "password": 123480
        },
        {
          "name": "Employee 25",
          "email": "employee25@company.com",
          "role": "Manager",
          "password": 123481
        },
        {
          "name": "Employee 26",
          "email": "employee26@company.com",
          "role": "SDE",
          "password": 123482
        },
        {
          "name": "Employee 27",
          "email": "employee27@company.com",
          "role": "SDE",
          "password": 123483
        },
        {
          "name": "Employee 28",
          "email": "employee28@company.com",
          "role": "SDE",
          "password": 123484
        },
        {
          "name": "Employee 29",
          "email": "employee29@company.com",
          "role": "SDE",
          "password": 123485
        },
        {
          "name": "Employee 30",
          "email": "employee30@company.com",
          "role": "Manager",
          "password": 123486
        },
        {
          "name": "Employee 31",
          "email": "employee31@company.com",
          "role": "SDE",
          "password": 123487
        },
        {
          "name": "Employee 32",
          "email": "employee32@company.com",
          "role": "SDE",
          "password": 123488
        },
        {
          "name": "Employee 33",
          "email": "employee33@company.com",
          "role": "SDE",
          "password": 123489
        },
        {
          "name": "Employee 34",
          "email": "employee34@company.com",
          "role": "SDE",
          "password": 123490
        },
        {
          "name": "Employee 35",
          "email": "employee35@company.com",
          "role": "Manager",
          "password": 123491
        },
        {
          "name": "Employee 36",
          "email": "employee36@company.com",
          "role": "SDE",
          "password": 123492
        },
        {
          "name": "Employee 37",
          "email": "employee37@company.com",
          "role": "SDE",
          "password": 123493
        },
        {
          "name": "Employee 38",
          "email": "employee38@company.com",
          "role": "SDE",
          "password": 123494
        },
        {
          "name": "Employee 39",
          "email": "employee39@company.com",
          "role": "SDE",
          "password": 123495
        },
        {
          "name": "Employee 40",
          "email": "employee40@company.com",
          "role": "Manager",
          "password": 123496
        },
        {
          "name": "Employee 41",
          "email": "employee41@company.com",
          "role": "SDE",
          "password": 123497
        },
        {
          "name": "Employee 42",
          "email": "employee42@company.com",
          "role": "SDE",
          "password": 123498
        },
        {
          "name": "Employee 43",
          "email": "employee43@company.com",
          "role": "SDE",
          "password": 123499
        },
        {
          "name": "Employee 44",
          "email": "employee44@company.com",
          "role": "SDE",
          "password": 123500
        },
        {
          "name": "Employee 45",
          "email": "employee45@company.com",
          "role": "Manager",
          "password": 123501
        },
        {
          "name": "Employee 46",
          "email": "employee46@company.com",
          "role": "SDE",
          "password": 123502
        },
        {
          "name": "Employee 47",
          "email": "employee47@company.com",
          "role": "SDE",
          "password": 123503
        },
        {
          "name": "Employee 48",
          "email": "employee48@company.com",
          "role": "SDE",
          "password": 123504
        },
        {
          "name": "Employee 49",
          "email": "employee49@company.com",
          "role": "SDE",
          "password": 123505
        },
        {
          "name": "Employee 50",
          "email": "employee50@company.com",
          "role": "Manager",
          "password": 123506
        },
        {
          "name": "Employee 51",
          "email": "employee51@company.com",
          "role": "SDE",
          "password": 123507
        },
      ]

    )
    res.send(employee)
  } catch (error) {
    console.log(error);
    res.status(500).send('Error creating employee');
  }
});
app.get("/school", async (req, res) => {
  try {
    const school = await School.create(
      [
        {
          name: "delhi public school",
          location: "delhi",
          students: [
            { name: "nand kumar sahu", age: 20, grade: 11 },
            { name: "nand ", age: 30, grade: 12 }
          ]
        },
        {
          "name": "Delhi Public School 1",
          "location": "Delhi",
          "students": [
            { "name": "Student 1", "age": 16, "grade": 11 },
            { "name": "Student 2", "age": 17, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 2",
          "location": "Mumbai",
          "students": [
            { "name": "Student 3", "age": 16, "grade": 11 },
            { "name": "Student 4", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 3",
          "location": "Kolkata",
          "students": [
            { "name": "Student 5", "age": 17, "grade": 11 },
            { "name": "Student 6", "age": 19, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 4",
          "location": "Chennai",
          "students": [
            { "name": "Student 7", "age": 15, "grade": 10 },
            { "name": "Student 8", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 5",
          "location": "Bangalore",
          "students": [
            { "name": "Student 9", "age": 17, "grade": 12 },
            { "name": "Student 10", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 6",
          "location": "Hyderabad",
          "students": [
            { "name": "Student 11", "age": 18, "grade": 12 },
            { "name": "Student 12", "age": 17, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 7",
          "location": "Pune",
          "students": [
            { "name": "Student 13", "age": 19, "grade": 12 },
            { "name": "Student 14", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 8",
          "location": "Jaipur",
          "students": [
            { "name": "Student 15", "age": 15, "grade": 10 },
            { "name": "Student 16", "age": 17, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 9",
          "location": "Ahmedabad",
          "students": [
            { "name": "Student 17", "age": 16, "grade": 11 },
            { "name": "Student 18", "age": 19, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 10",
          "location": "Lucknow",
          "students": [
            { "name": "Student 19", "age": 15, "grade": 10 },
            { "name": "Student 20", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 11",
          "location": "Chandigarh",
          "students": [
            { "name": "Student 21", "age": 17, "grade": 12 },
            { "name": "Student 22", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 12",
          "location": "Patna",
          "students": [
            { "name": "Student 23", "age": 19, "grade": 12 },
            { "name": "Student 24", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 13",
          "location": "Indore",
          "students": [
            { "name": "Student 25", "age": 16, "grade": 11 },
            { "name": "Student 26", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 14",
          "location": "Bhopal",
          "students": [
            { "name": "Student 27", "age": 17, "grade": 11 },
            { "name": "Student 28", "age": 15, "grade": 10 }
          ]
        },
        {
          "name": "Delhi Public School 15",
          "location": "Guwahati",
          "students": [
            { "name": "Student 29", "age": 19, "grade": 12 },
            { "name": "Student 30", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 16",
          "location": "Varanasi",
          "students": [
            { "name": "Student 31", "age": 16, "grade": 11 },
            { "name": "Student 32", "age": 17, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 17",
          "location": "Gurgaon",
          "students": [
            { "name": "Student 33", "age": 15, "grade": 10 },
            { "name": "Student 34", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 18",
          "location": "Noida",
          "students": [
            { "name": "Student 35", "age": 17, "grade": 12 },
            { "name": "Student 36", "age": 18, "grade": 12 }
          ]
        },
        {
          "name": "Delhi Public School 19",
          "location": "Dehradun",
          "students": [
            { "name": "Student 37", "age": 19, "grade": 12 },
            { "name": "Student 38", "age": 16, "grade": 11 }
          ]
        },
        {
          "name": "Delhi Public School 20",
          "location": "Amritsar",
          "students": [
            { "name": "Student 39", "age": 16, "grade": 11 },
            { "name": "Student 40", "age": 17, "grade": 12 }
          ]
        }

      ]
    )
    res.send(school)
  } catch (error) {
    console.log(error);
  }
})


app.listen(3000, () => {
  console.log('Server is listen on port 3000');

});
