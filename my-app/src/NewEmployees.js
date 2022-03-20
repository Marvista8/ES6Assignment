const userPermissions = {add: 'true', edit: 'true', view: 'true', delete: 'true'};
console.log(userPermissions);

class Employee {
    constructor(fullName, idNumber, storeNumber, permissions) {
        this.fullName = fullName;
        this.idNumber = idNumber;
        this.storeNumber = storeNumber;
        this.permissions = permissions;
        this.employmentType = Employee;
    }
}

class Manager extends Employee {
    constructor(fullName, idNumber, storeNumber, permissions, employees) {
        super(fullName, idNumber, storeNumber, permissions)
        this.employees = employees;
        this.employmentType = Manager;
    }
    setUserPremissions(employee, setUserPermissions) {
        let findEmployee = false;
        console.log(findEmployee);

        for(let i = 0; i < this.employees.length; i++) {
        if (employee.idNumber === this.employees[i].idNumber)
        console.log(employee.idNumber === this.employees[i].idNumber)
        }
    }
}

export default Employee;