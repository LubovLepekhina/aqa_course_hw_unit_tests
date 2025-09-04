class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary
  }
  get firstName() {
    return this._firstName;
  }

  set firstName(value) {
    if (typeof value !== 'string' || !this.isCorrectLength(value, 2, 50) || !this.isLatinLetters(value)) {
      throw new Error('Wrong data');
    } 
    this._firstName = value;
  }

  isLatinLetters(value) {
    let isLatin = true;
    for (let char of value) {
      const code = char.charCodeAt();
      if (!(code >= 65 && code <= 90 || code >= 97 && code <= 122)) {
        isLatin = false;
        break;
      }
    }
    return isLatin;
  }

  isCorrectLength(value, from, to) {
    return value.length >= from && value.length <= to;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (typeof value !== 'string' || !this.isCorrectLength(value, 2, 50) || !this.isLatinLetters(value)) {
      throw new Error('Wrong data');
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  
  set profession(value) {
    if (typeof value !== 'string' || !value.trim().length || !this.isCorrectProfession(value)) {
      throw new Error('Wrong data');
    } 
    this._profession = value;
  }

  isCorrectProfession(value) {
    return value.split(' ').every(word => this.isLatinLetters(word));
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number') throw new Error('Wrong data type');
    if (value <= 0 || value >= 10000) throw new Error('Salary should be from 0 to 10000');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }
  getTitle() {
    return this.title;
  }

  getPhone() {
    return this.phone;
  }

  getAdress() {
    return this.address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error('Wrong data');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const found = this.#employees.find(emp => emp.firstName === firstName);
    if (typeof firstName !== 'string' || !found) throw new Error('Wrong data');
    return found;
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index < 0) throw new Error("Employee doesn't exist")
    this.#employees.splice(index, 1);
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(emp => emp.firstName === firstName);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, curr) => curr.salary + sum, 0)
  }
}

const company = new Company('Tech Corp', 123456, 'Main Street');
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
const emp3 = new Employee('Kate', 'Johnsonss', 'QA', 1000);
const emp4 = new Employee('Mike', 'Johnsons', 'QA', 1500);
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);
company.addEmployee(emp4);
console.log(company.getEmployees()); 

console.log(company.findEmployeeByName('Mike'));
company.removeEmployee('Kate');
console.log(company.getEmployees());
console.log(company.getTotalSalary());

export { Employee, Company };
