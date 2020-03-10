const Faker = require("faker");
const db = require("./methods");
const employees = [];

for (let i = 0; i < 300; i++) {
  const employee = {
    first_name: Faker.name.firstName(),
    last_name: Faker.name.lastName(),
    age: Faker.random.number(18, 100),
    date_joined: Faker.date.past(),
    salary: Faker.random.number({ min: 50000, max: 150000 }),
    performance_score: Faker.random.number({ min: 0, max: 10 }),
    email: Faker.internet.email(),
    motto: Faker.lorem.sentence()
  };

  employees.push(employee);
}

db.insertMany(employees);
