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
       this.title = title,
       this.genre = genre,
       this.year = year,
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
const storeEmployee1 = new Employee('John', 'Doe', '01206856', '01001').addBook;
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
const Regions = countries.map((countries) => {return 'fin', 'est', 'sw', 'den', 'nor'});    //Something wrong: Only returning new array with nor (Debugging)
console.log(countries);
console.log(Regions);

const rectangle = {
    width: 20,
}
