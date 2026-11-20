
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


class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance = this.balance + amount;

    }

    checkBalance() {
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
        // console.log(`Name: ${this.name}`);
        // console.log(`Department: ${this.department}`);
        // console.log(`Salary: UGX ${this.salary}`);
    }
}

let employee1 = new Employee("James", 800000, "IT");

employee1.increaseSalary(200000);
employee1.displayDetails()



class CartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    getTotalPrice() {
        let totalCost = this.price * this.quantity
        return totalCost;
    }
}
let item1 = new CartItem("Shoes", 50, 3);
let item2 = new CartItem("Bag", 30, 2);


// console.log(item1.getTotalPrice());
// console.log(item2.getTotalPrice());

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getPrice() {
        return this.price;
    }
}

let product1 = new Product("Laptop", 1500000);

//let result = product1.getPrice();

//console.log(product1.getPrice());

class ShoppingCart {
    constructor(item, price) {
        this.item = item;
        this.price = price;
    }
    getTotal() {
        return this.price;
    }
}
let cart1 = new ShoppingCart("Shoes", 80000);

let total = cart1.getTotal()

//console.log(total);


class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        let area = this.length * this.width;
        return area;
    }
}

let rectangle1 = new Rectangle(12, 5);

let area = rectangle1.calculateArea();
//console.log(area);


class Car {
    constructor(brand, speed, year) {
        this.brand = brand;
        this.speed = speed;
        this.year = year;
    }
    increaseSpeed(amount) {
        this.speed += amount
        return this.speed;
    }
    getSpeed() {
        return this.speed
    }
}
let car1 = new Car("Toyota", 80, 2022);

// car1.increaseSpeed(30);

// let currentSpeed = car1.getSpeed() ;
// console.log(currentSpeed);

class BankAcc {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
}
let account2 = new BankAcc("Alice", 100000);

// account2.deposit(50000)
// account2.withdraw(20000)

// let finalBalance = account2.getBalance();

// console.log(finalBalance);



class MobileMoney {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return this.balance;
    }

    withdraw(amount) {
        this.balance -= amount;
        return this.balance;
    }
    getBalance() {
        return this.balance;
    }
}
let acc = new MobileMoney("David", 200000);

acc.deposit(50000);
acc.withdraw(30000);
acc.deposit(10000);

let finalBalance = acc.getBalance();
//console.log(finalBalance);

//INHERITANCE

class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        //console.log(`${this.name} is eating.`);
    }
}

class Dog extends Animal {

}

//extends = inherits
//That means Dog can use the properties and methods defined in Animal

let dog1 = new Dog("Bobby");

dog1.eat();
// Animal is the parent class (also called the base class).
// Dog is the child class (also called the derived class).
// extends connects the child class to the parent class

//super - allows a child class to call the constructor or methods of its parent class.

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
}

class Car2 extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
}

let car4 = new Car2("Toyota", "Corolla");

// console.log(car4.brand);
// console.log(car4.model);


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person {
    constructor(name, age, language) {
        super(name, age);
        this.language = language;
    }
}

let dev1 = new Developer("Alice", 25, "JavaScript");

// console.log(dev1.name);
// console.log(dev1.age);
// console.log(dev1.language);


class Employee1 {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;

    }

    displayInfo() {
        // console.log(`Name: ${this.name}`);
        // console.log(`Salary: ${this.salary}`);

    }
}

class Manager extends Employee1 {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;

    }
    displayDepartment() {
        //console.log(`department: ${this.department}`)
    }
}

let manager = new Manager("James", 1500000, "IT");

manager.displayInfo();
manager.displayDepartment();


//Method Overriding

// class Animal1 {
//     makeSound() {
//        // console.log("The animal makes a sound.");
//     }
// }

// class Dog extends Animal1 {
//     makeSound() {
//        // console.log("The dog barks.");
//     }
// }

// let dog2 = new Dog();

// dog2.makeSound();

// let animal2 = new Animal1();

// animal2.makeSound();


class Vehicle2 {
    start() {
        //console.log("vehicle is starting")
    }
}
class Motorcycle extends Vehicle2 {
    start() {
        //console.log("Motorcycle engine is starting")
    }
}
let vehicle3 = new Vehicle2();
let motorcycle1 = new Motorcycle();

vehicle3.start();
motorcycle1.start()

//super.methodName - this executes the parent's method. (Calls a method from the parent class)


class Worker {
    work() {
        //console.log("Worker is working")
    }

}
class Programmer extends Worker {
    work() {
        super.work()
        //console.log("The programmer is working")
    }
}

let programmer = new Programmer();

programmer.work();



class Payment{
    processPayment(){
        //console.log("Processing general payment");
    }
}

class CreditCardPayment extends Payment{
    processPayment(){
        super.processPayment()
        //console.log("Payment made using a credit card.")
    }
}

let payment1 = new CreditCardPayment();

payment1.processPayment();


class Inventory{
    constructor(productName, quantity){
        this.productName = productName;
        this.quantity = quantity;
    }
    displayInfo(){
        // console.log(`Product: ${this.productName}`);
        // console.log(`Quantity: ${this.quantity}`);

    }
}

class WarehouseInventory extends Inventory{
    constructor(productName, quantity, warehouseLocation){
        super(productName, quantity);
        this.warehouseLocation = warehouseLocation;

    }
    displayInfo(){
        super.displayInfo()
        //console.log(`Warehouse: ${this.warehouseLocation}`)
    }
}


let produce = new WarehouseInventory("Rice", 50, "Kampala")

produce.displayInfo()


class ElectricityBill{
    constructor(unit, cost){
        this.unit = unit;
        this.cost = cost;
    }

    calculateBill(){
        // console.log(`Units consumed: ${this.unit}`);
        // console.log(`Cost per unit: ${this.cost}`);
    }
}

class ResidentialBill extends ElectricityBill{
    constructor(unit, cost){
        super(unit, cost)
    }

    calculateBill(){
        super.calculateBill();
        let total = this.unit * this.cost;
        //console.log(`Total Bill: ${total}`);

    }
}

let receipt = new ResidentialBill(120, 500);
receipt.calculateBill();


class Order{
    constructor(id, product){
        this.id = id;
        this.product = product
    }
    showOrder(){
        // console.log(`Order ID: ${this.id}`);
        // console.log(`Product: ${this.product}`);
    }

}

class ExpressOrder extends Order{
    constructor(id, product, delivery, fee){
        super(id, product);
        this.delivery = delivery;
        this.fee = fee;
    }
    showOrder(){
        super.showOrder();
        // console.log(`Delivery: ${this.delivery}`);
        // console.log(`Delivery Fee: ${this.fee}`);
    }

}

let order1 = new ExpressOrder(105, "Laptop", "Express", 15000)

order1.showOrder();


class Subscription{
    constructor(customer, plan){
        this.customer = customer;
        this.plan = plan
    }

    showDetails(){
        console.log(`Customer: ${this.customer}`);
        console.log(`Plan: ${this.plan}`);
    }

}

class PremiumSubscription extends Subscription{
     constructor(customer, plan, status, isActive){
        super(customer, plan);
        this.status = status;
        this.isActive = isActive;

    }
    showDetails(){
        super.showDetails()

        if(this.isActive === true){
            console.log(`Status: Active`);
            console.log(`Access: All premium features.`)
        }else{
            console.log(`Status: Inactive`);
            console.log(`Access: Limited features.`)
        }
    }
}

let customer = new PremiumSubscription("Sarah", "basic", true);

customer.showDetails();







