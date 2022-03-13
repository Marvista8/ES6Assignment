class Employee {
    constructor(fName, lName, idNumber, storeNumber) {
     this.firstName = fName;
     this.lastName = lName;
     this.IdNumber = idNumber;
     this.StoreNumber = storeNumber;
     this.employee = Employee;
    }
    permissionsList = () => {
        //find way to add permissions without code ref
    }
};

//console.log(Employee);
const storeEmployee1 = new Employee('John', 'Doe', '01206856', '01001');
const storeEmployee2= new Employee('Jane', 'Doe', '01216856', '01001');
console.log(storeEmployee1);
console.log(storeEmployee2);


class Manager extends Employee {
    constructor(fName, lName, idNumber, storeNumber, admin) {
        super(fName, lName, idNumber, storeNumber) 
        this.managerAbilities = admin;
    }
}

//console.log(Manager);
const storeManager = new Manager('Karen', 'Doe', '01256856', '01001');
console.log(storeManager);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [Finland, Estonia, Sweden, Denmark, Norway] = countries;
const Regions = countries.map((fin, est, sw, den, nor) => {fin, est, sw, den, nor});

console.log(countries);
console.log(Regions);
