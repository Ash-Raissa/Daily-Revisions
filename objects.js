// let person = {
//     name: "David",
//     age: 28,
//     country: "Uganda"
// };

// console.log(person.name);
// console.log(person.age);

// person.age = 30;


// person.profession = "Developer";
// console.log(person);


//OBJECT METHOD - Functions Inside Objects.
//eg

// let person = {
//     name: "David",
//     age: 28,
//     greet: function(){
//         console.log("Hello my name is David");
//     }
// };

// person.greet();

//OR

// let person = {
//     name: "David",
//     age: 28,
//     greet: function(){
//         console.log("Hello my name " + this.name); //'this' refers to the object that owns the method when it is called.
//     }
// };

// person.greet();


// let bankAccount = {
//     owner: "Mary",
//     balance: 5000,
//     deposit: function(amount){
//         let updatedBalance = amount + this.balance;
//         console.log(updatedBalance);
//     }
// }
// bankAccount.deposit(2000)

// let bankAccount = {
//     owner: "John",
//     balance: 10000,

//     deposit: function(amount){
//         let deposited = amount + this.balance; 
//         console.log(deposited);

//     },

//     withdraw: function(amount){
//         let deposited2 = this.balance - amount;
//         console.log(deposited2);

//     },

//     checkBalance: function(){
//         console.log(deposited2)

//     }
// }

// bankAccount.deposit(3000);
// bankAccount.withdraw(2000);

// let account = {
//     owner: "Mary",
//     balance: 15000,

//     deposit: function (amount) {
//         this.balance += amount;
//         console.log(amount)
//     },

//     withdraw: function (amount) {


//         if (amount > this.balance) {
//             console.log("Insufficient funds")
//         } else {
//             this.balance -= amount;
//             console.log("Withdrawal successful!");
//         }

//     },

//     checkBalance: function () {
//         console.log("current balance:", this.balance);

//     }
// };

// account.deposit(5000);
// account.withdraw(3000);
// account.withdraw(20000);
// account.checkBalance();


let employee = {
    name: "Sarah",
    age: 26,
    department: "IT",

    address: {
        country: "Uganda",
        city: "Kampala"
    }
};

// console.log(employee.name);
// console.log(employee.address.city);

employee.address.city = "Entebbe";

employee.address.street = "Airport Road";

// console.log(employee);

//ARRAY OF OBJECTS

const students = [
    {name: "John", marks: 80},
    {name: "Mary", marks: 65},
    {name: "David",marks: 90}
];
//we access the information using the index.
//e.g
//console.log(students[2].name); //2-selects the object at index 2(third object), name accesses the name property of that object.


let employees = [
    {name: "Alice", salary: 2500},
    {name: "Brian", salary: 3000},
    {name: "Sarah", salary: 3500}
];

//Display brian's name
//console.log(employees[1].name);

//Display Sarah's salary
//console.log(employees[2].salary);

//change Alice's salary to 2800

employees[0].salary = 2800;
//console.log(employees[0].salary);

employees.push({name: "Peter", salary: 4000});
//console.log(employees);

let earner = {
    name: "David",
    age: 29,
    position: "Developer",
    salary: 3500,
    skills: ["HTML", "CSS", "JavaScript"]
};

function getEmployeeInfo(earner){

    return {
        name: earner.name,
        position: earner.position, 
        salary: earner.salary, 
        skills: earner.skills.length
    }
};

//console.log(getEmployeeInfo(earner));

let customer = {
    name: "David",
    email: "david@gmail.com",
    cart: [
        { product: "Shoes", price: 100, quantity: 2 },
        { product: "Bag", price: 50, quantity: 1 },
        { product: "Watch", price: 200, quantity: 2 }
    ]
};

function getCustomerSummary(customer) {

    let totalItems = customer.cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    let totalAmount = customer.cart.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0);

    return {
        name: customer.name,
        email: customer.email,
        totalItems: totalItems,
        totalAmount: totalAmount
    };
}

//console.log(getCustomerSummary(customer));



















