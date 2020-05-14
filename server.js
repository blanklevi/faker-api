const express = require("express");
const app = express();
const port = 8000;

var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

class User {
  constructor() {
    this._id = faker.random.number();
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = faker.random.number();
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    };
  }
}

const newUser = new User();
const newCompany = new Company();
const newBoth = [new User(), new Company()];

// req is shorthand for request
// res is shorthand for response
app.get("/api/users/new", (req, res) => {
  res.json(newUser);
});
app.get("/api/companies/new", (req, res) => {
  res.json(newCompany);
});
app.get("/api/user/company", (req, res) => {
  res.json(newBoth);
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));
