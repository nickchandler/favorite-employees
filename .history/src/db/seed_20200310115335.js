const Faker = require("faker");
const db = require("./methods.js");
const employees = [];

for (let i = 0; i < 300; i++) {
  const employee = {
    first_name: Faker.first_name(),
    last_name: Faker.last_name(),
    age: Faker.random.number(18, 100),
    date_joined: Faker.date.past(),
    salary: Faker.random.number(50000, 150000),
    performance_score: Faker.random.number(0, 10),
    email: Faker.internet.email(),
    motto: Faker.lorem.sentence()
  };

  employees.push(employee);
}

db.insertMany(employees);
