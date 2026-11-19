
// class Student {
//     constructor(name, age, course) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }
// }
//constructor() receives the information when creating a student.
//this.name refers to the object's own name property.

//creating objects from a class.

// we use the new keyword


// class Student {
//     constructor(name, age, course) {
//         this.name = name;
//         this.age = age;
//         this.course = course;
//     }
//}

// let student1 = new Student("Raissa", 24, "JavaScript");
// let student2 = new Student("Mary", 25, "Node.js")

// console.log(student1);
// console.log(student2);




class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
let book1 = new Book("Things Fall Apart", "Chinua Achebe", 1958);
let book2 = new Book("The Alchemist", "Paulo Coelho", 1988);

// console.log(book1.title);
// console.log(book2.author);
// console.log(book1.year)


class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    introduce() {
        //console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }
}

let student1 = new Student("Alice", 21, [80, 75, 90]);
//let student2 = new Student("David", 23, [65, 85, 70])

//student1.introduce();

// console.log(student1.name);
// console.log(student2.age);
// console.log(student1.marks[1]);
// console.log(student2.marks[2])
//introduce is a method, it belongs to the student class.
//Unlike the constructor, a method is not automatically executed when an object is created.
//  You have to call it.


class Phone {
    constructor(brand, storage) {
        this.brand = brand;
        this.storage = storage;
    }

    displayInfo() {
        //console.log(`This is an ${this.brand} with ${this.storage} storage`)
    }
}

let phone1 = new Phone("iPhone", "256GB");
let phone2 = new Phone("Samsung", "128GB");

// phone1.displayInfo();
// phone2.displayInfo();


class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount){
    this.balance = this.balance + amount;

    }

    checkBalance(){
        //console.log(`${this.owner} has ${this.balance}`);
    }
}

let account1 = new BankAccount("Alice", 50000);

account1.deposit(15000);
account1.checkBalance();

class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    increaseSalary(amount) {
        this.salary = this.salary + amount;

    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Department: ${this.department}`);
        console.log(`Salary: UGX ${this.salary}`);
    }
}

let employee1 = new Employee("James", 800000, "IT");

employee1.increaseSalary(200000);
employee1.displayDetails()











