interface IEnterprise {
    id: number;
    name: string;
    departments: IDepartment[]
}

interface IDepartment {
    id: number;
    name: string;
    employees_count: number
}

class Enterprise implements IEnterprise {
    public departments: Department[] = [];
    constructor(public id: number, public name: string) {}

    public addDepartment(id: number, name: string, employees_count: number = 0): void {
        const departament = new Department(id, name, employees_count);
        this.departments.push(departament);
    }

    public editDepartment(id: IDepartment['id'], newName: IDepartment['name']): void {
        this.getDepartmentById(id).name = newName;
    }

    public getAllDepartments(): IDepartment[] {
        return this.departments;
    }

    public deleteDepartment(id: IDepartment['id']): void {
        const index = this.departments.findIndex(item => item.id === id);
        if (index < 0) throw new Error(`The department with id ${id} doesn't exist`);
        this.departments.splice(index, 1);
    }

    public deleteEmptyDepartments(): void {
        this.departments.filter(item => item.employees_count === 0).forEach(item => this.deleteDepartment(item.id));
    }

    public getTotalEmployee(): number {
        return this.departments.reduce((sum, curr) => sum + curr.employees_count, 0);
    }

    public getEnterpriseInfo(): string {
        const entInfo = `${this.name} (${this.getTotalEmployee()} employees)\n`;
        const deptInfo = this.departments.map(item => item.getDepartmentInfo()).join('\n');
        return entInfo + deptInfo;
    }

    public moveAllEmployees(deptIdFrom: IDepartment['id'], deprIdTo: IDepartment['id']): void {
        let deptFrom = this.getDepartmentById(deptIdFrom);
        let deptTo = this.getDepartmentById(deprIdTo);
        deptTo.employees_count += deptFrom.employees_count;
        deptFrom.employees_count = 0;
    }

    public moveEmployee(deptIdFrom: IDepartment['id'], deprIdTo: IDepartment['id']): void {
        let deptFrom = this.getDepartmentById(deptIdFrom);
        let deptTo = this.getDepartmentById(deprIdTo);
        if (deptFrom.employees_count > 0) {
            deptTo.addEmployee();
            deptFrom.removeEmployee();
        } else {
            throw new Error(`There are no emloyees in department with id ${deptIdFrom}`);
        }
    }

    private getDepartmentById(id: number): Department {
        const foundDept = this.departments.find(dept => dept.id === id);
        if (!foundDept) throw new Error(`The department with id ${id} doesn't exist`);
        return foundDept;
    }

}

class Department implements IDepartment {
    constructor(public id: number, public name: string, public employees_count: number) {}

    public getEmployeesCount(): number {
        return this.employees_count;
    }

    public addEmployee(): void {
        this.employees_count++;
    }

    public removeEmployee(): void {
        if (this.employees_count > 0) {
            this.employees_count--;
        } else {
            throw new Error(`There are not any employee`);
        }
    }

    public renameDepartment(newName: string): void {
        this.name = newName;
    }

    public getDepartmentInfo(): string {
        if (this.employees_count === 1) {
            return `- ${this.name} department (${this.employees_count} employee)`;
        } else {
            return `- ${this.name} department (${this.employees_count} employees)`;
        }       
    }
}

class EnterpriseStorage{
    protected enterprises: Enterprise[] = [];

    public getAllEnterprises(): Enterprise[] {
        return structuredClone(this.enterprises);
    }

    public addEnterprise(enterprise: Enterprise): void {
        this.enterprises.push(enterprise);
    }

    public getEnterpriseByDepartmentIdOrName(idOrName: IEnterprise['id'] | IEnterprise['name']): Enterprise {
        const found = this.enterprises.find(ent => ent.departments.find(dept => dept.id === idOrName || dept.name === idOrName));
        if (!found) throw new Error(`Enterprise that contains department with id ${typeof idOrName === 'number' ? idOrName : ''} or name ${typeof idOrName === 'string' ? idOrName : ''} doesn't exist`);
        return found;
    }

    public editEnterprise(id: IEnterprise['id'], newName: IEnterprise['name']): void {
        const foundEnt = this.enterprises.find(ent => ent.id === id);
        if (!foundEnt) throw new Error(`The enterprise with id ${id} doesn't exist`);
        foundEnt.name = newName;
    }

    public deleteEnterprise(id: IEnterprise['id']): void {
        const index = this.enterprises.findIndex(item => item.id === id);
        this.enterprises.splice(index, 1);
    }

    findEnterpriseByName(name: IEnterprise['name']): Enterprise {
        const foundEnt = this.enterprises.find(item => item.name === name);
        if (!foundEnt) throw new Error(`There is not enterprises with name ${name}`);
        return foundEnt;
    }
}

const ent1 = new Enterprise(1, 'Oracle');
ent1.addDepartment(56, 'HR', 30);
ent1.addDepartment(2, 'Dev', 100);
ent1.addDepartment(7, 'DevOps', 50);
ent1.addDepartment(3, 'QA');
console.log(ent1.getAllDepartments());
ent1.editDepartment(2, 'Development');
ent1.moveEmployee(2, 7);
ent1.deleteEmptyDepartments();
console.log(ent1.getEnterpriseInfo());

const ent2 = new Enterprise(2, 'Tri Ribara');
ent2.addDepartment(123, 'Waiters', 5);
ent2.addDepartment(124, 'Clining', 2);
ent2.addDepartment(125, 'Chefs', 1);

const allEnt = new EnterpriseStorage();
allEnt.addEnterprise(ent1);
allEnt.addEnterprise(ent2);
console.log(allEnt.getAllEnterprises());
console.log(allEnt.getEnterpriseByDepartmentIdOrName('Waiters'));
allEnt.editEnterprise(2, 'Porat');
// allEnt.deleteEnterprise(2);
console.log(allEnt.getAllEnterprises());



const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];



// Задания:
// +1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// +2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// +3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// +4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// +5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// +6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// +7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// +8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// +9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)
