import React from "react";
import { render } from "react-dom";

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

console.log('Employee: ', Employee);

const staffManager = new Manager('Michael Howard', 165894, 100, null);

console.log('staffManager: ', staffManager);

let staffMembers = () => {
    let staffMember1 = new Employee('Carlos Delgado', 102345, 100, {add: 'true', edit: 'true', view: 'true', delete: 'false'});
    let staffMember2 = new Employee('Holly Withers', 103568, 100, {add: 'true', edit: 'true', view: 'true', delete: 'false'});
    let staffMember3 = new Employee('Jonathan Miller', 104685, 100, {add: 'true', edit: 'true', view: 'true', delete: 'false'});
    console.log('staffMember1: ', staffMember1, 'staffMember2: ', staffMember2, 'staffMember3: ', staffMember3);
}

let staffManagers = () => {
    let staffManager = new Manager('Michael Howard', 198753, 100, {add: 'true', edit: 'true', view: 'true', delete: 'true'});
    console.log('staffManager: ', staffManager);
}

staffMembers();
staffManagers();


// let Finland, Estonia, Sweden, Denmark, Norway;

// [Finland, Estonia, Sweden, Denmark, Norway] = ['fin', 'est', 'sw', 'den', 'nor'];
// console.log(Finland,Estonia, Sweden, Denmark, Norway);

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [fin, est, sw, den, nor] = countries;
console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);

const newCountries = () => {
    const Regions = countries.map((arr) => { return ['fin', 'est', 'sw', 'den', 'nor']});
    console.log(Regions);
    return countries;
}

newCountries();

const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}


let myRectangle = ({width, height, area, perimeter}) => {
    const rectange1 = 'My rectangle is ' + width + ' width ' + height + ' height ' + area + ' area ' + perimeter + ' perimeter ';
    console.log(rectange1);
}

myRectangle(rectangle);


let ray = 0;
console.log(ray);

const evens = [2, 4, 6, 8, 10];
console.log(evens);

const odds = [1, 3, 5, 7, 9];
odds.push(ray);
console.log(odds);

let allTheNumbers = [...odds, ...evens];
console.log(allTheNumbers);

allTheNumbers.sort((a, b) => {
    return a - b;
});

console.log(allTheNumbers)

const NumberElement = (<h1>Numbers In Order : {allTheNumbers}</h1>)
console.log(NumberElement)

export default NumberElement;

