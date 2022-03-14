class Employee {
    constructor(fName, lName, idNumber, storeNumber) {
     this.firstName = fName;
     this.lastName = lName;
     this.IdNumber = idNumber;
     this.StoreNumber = storeNumber;
     this.employee = Employee;
    }
    getBook () {
       this.author = author;
       this.title = title;
       this.genre = genre;
       this.year = year;
       this.isbn = isbn;
       let book = {author} + {title} + {genre} + {year} + {isbn};
       return book;
    };
    getCredentials () {
        this.telephoneNumber = telephone;
        this.employeeEmail = email;
        this.employeePassword = password;
        let credentials = {this:telephone} + {this:email} + {this:password};
        return credentials;
    }
    getPermissions () {
        return this.getCredentials + this.getBook
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
        this.abilities = admin;
        this.manager = Manager;
    }
    delete () {
        return this.delete;
    }
    acceptProfile () {
        this.acceptProfile = accept;
        this.employeePassword = password;
        this.employeeEmail = email;
        this.telephoneNumber = telephone;
        return new this.acceptProfile;
    }
    reset () {
        this.employeePassword = passwordReset;
        this.employeeEmail = emailReset;
        let newPassword = passwordReset + emailReset;
        return newPassword;
    }
}

//console.log(Manager);
const storeManager = new Manager('Karen', 'Doe', '01256856', '01001');
console.log(storeManager);


const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];
const [Finland, Estonia, Sweden, Denmark, Norway] = countries; 
console.log(countries)
const Regions = countries.map((country) => {newCountries()});

function newCountries(con) {
    const countryArray = ['fin', 'est', 'sw', 'den', 'nor'];
    console.log(countryArray);

     return document.getElementById('demo').innerHTML += countryArray;
}
//need to figure out how to space them out looks to crowded


const rectangle = {
    width: 20,
    height: 10,
    area: 200, 
    perimeter: 60,
}

myRectangle(rectangle);

function myRectangle({width, height, area, perimeter}) {
    const message = 'The rectangle is ' + width + ' centimeters wide and the height is ' + height + ' centimeters tall, with an area of ' + area + ' centimeters, and a perimeter of ' + perimeter + ' centimeters.';
    return message;
}


const evenNums = [,'0', '2', '4', '6', '8', '10'];
// const [0, 2, 4, 6, 8, 10] = evenNums;         //Not letting me destructure without an error for both
console.log(evenNums); 

const oddNums = [1, 3, 5, 7, 9];
// const [1, 3, 5, 7, 9] = oddsList;
console.log(oddNums);

numbersArray = () => {
    const newNums = [...evenNums, 1, 3, 5, 7, 9];
    console.log(newNums);

    return document.getElementById('demo').innerHTML += newNums;
}

numbersArray();

// const newNums = [...evenNums, 1, 3, 5, 7, 9];
// console.log(newNums);

// document.getElementById('demo').innerHTML += newNums;

 addArray = () => {
    let newNumbers = oddNums + evenNums;
    console.log(newNumbers);
    return newNumbers;
}
addArray().allTheNumbers;



