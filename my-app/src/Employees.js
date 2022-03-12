class Employee {
    constructor(name, idNumber, permissionList, storeNumber) {
        this.name = name;
        this.idNumber = idNumber;
        this.permissionList = permissionList;
        this.storeNumber = storeNumber;
        this.Employee = Employee;
    }
};

class Manager extends Employee {
    constructor(manage, admin) {
        super(Employee) 
        this.manage = manage;
        this.admin = admin;
    }
}

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'] = countries;
console.log('Finland');
