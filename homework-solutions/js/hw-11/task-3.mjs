class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
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

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || typeof value !== 'number') throw new Error('Wrong data type');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
    if (!language.length || typeof language !== 'string' || !this.isLatinLetters(language)) throw new Error('Wrong data');
    this.programmingLanguages.push(language);
  }

  getProgrammingLanguages() {
    return this.programmingLanguages;
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  get teamSize() {
    return this._teamSize;
  }

  set teamSize(value) {
    if (typeof value !== 'number') throw new Error('Wrong data type');
    return this._teamSize = value;
  }

  increaseTeamSize() {
    this.teamSize += 1;
  }
}

class Designer extends Employee {
  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool.length) throw new Error('Wrong data type');
    this.designTools.push(tool);
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
  }

  hasDuplicates(firstName, lastName) {
    return this.#employees.some(emp => emp._firstName === firstName && emp._lastName === lastName)

  } 

  addEmployee(employee) {
    if (employee instanceof Employee && !this.hasDuplicates(employee._firstName, employee._lastName)) {
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

  getEmployeesByProfession(profession) {
    return this.#employees.filter(emp => emp.constructor.name === profession);
  }
}

const dev1 = new Developer('Kate', 'Hudson', 7000, ['Python']);
const dev2 = new Developer('Kate', 'Hudson', 8000, ['Java']);
dev1.addProgrammingLanguage('JavaScript');
console.log(dev2.salary);
console.log(dev2.firstName);
console.log(dev2.getFullName());
console.log(dev1.getProgrammingLanguages());

const manager1 = new Manager('Bob', 'Brown', 90000, 5);
console.log(manager1.teamSize);
manager1.increaseTeamSize();
console.log(manager1.teamSize);

const designer1 = new Designer('Diana', 'White', 75000, ['Photoshop']);
console.log(designer1.designTools);
designer1.addDesignTool('Figma');
console.log(designer1.designTools);

const company = new Company('Tech Corp', 123456, 'Main Street');
company.addEmployee(manager1);
company.addEmployee(dev1);
// company.addEmployee(dev2);
company.addEmployee(designer1);
console.log(company.getEmployees());
console.log(dev1.constructor.name);
console.log(company.getEmployeesByProfession('Developer'));


export { Employee, Company, Designer, Developer, Manager };
