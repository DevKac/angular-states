const customers = require('./generators/customers.js');
const employees = require('./generators/employees.js');

module.exports = function() {
  return {
    customers: customers.generateCustomers(),
    employees: employees.generateEmployees(),
  }
}
