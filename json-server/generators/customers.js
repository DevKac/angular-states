var faker = require('faker');

function generateCustomers () {
  var customers = []
  for (var id = 0; id < 50; id++) {
    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()
    var email = faker.internet.email()
    customers.push({
      "id": id,
      "first_name": firstName,
      "last_name": lastName,
      "email": email
    })
  }  return { "customers": customers }
}

module.exports.generateCustomers = generateCustomers
