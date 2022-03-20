const setPermissions = {
    add: 'true',
    edit: 'true',
    view: 'true',
    delete: 'true',
};

console.log('setPermissions: ', setPermissions);

class Employee {
    constructor(fullName, idNumber, storeNumber, permissions) {
        this.fullName = fullName;
        this.idNumber = idNumber;
        this.storeNumber = storeNumber;
        this.permissions = permissions;
        this.employeeType = 'Employee';
    }
}

class Manager extends Employee {
    constructor(fullName, idNumber, storeNumber, permissions, employees) {
        super(fullName, idNumber, storeNumber, permissions)
        this.employees = employees;
        this.employeeType = 'Manager';
    }
    updatePermissions(employee, updatePermissionSet) {
        let foundEmployee = false;
        console.log('foundEmployee: ', foundEmployee);
        for (let i = 0; i < this.employees[i].length; i++) {
            if (employee.idNumber === this.employees[i].idNumber) {
                employee.permissions = updatePermissionSet;
                foundEmployee = true;
                break;
            }
        }

        return employee;
    }
}

class Book {
    constructor(title, author, genre, isbn, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.isbn = isbn;
        this.year = year;
    }
}

const staffMember1 = new Employee('Carlos Delgado', 102345, 100, null);
const staffMember2 = new Employee('Holly Withers', 103586, 100, null);
const staffMember3 = new Employee('Jonathan Miller', 104685, 100, null);

console.log('Employee: ', Employee);
console.log('staffMember1: ', staffMember1);
console.log('staffMember2: ', staffMember2);
console.log('staffMember3: ', staffMember3);

const staffManager = new Manager('Michael Howard', 165894, 100, null);

console.log('staffManager: ', staffManager);

export default Employee;