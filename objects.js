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

let account = {
    owner: "Mary",
    balance: 15000,

    deposit: function (amount) {
        this.balance += amount;
        console.log(amount)
    },

    withdraw: function (amount) {


        if (amount > this.balance) {
            console.log("Insufficient funds")
        } else {
            this.balance -= amount;
            console.log("Withdrawal successful!");
        }

    },

    checkBalance: function () {
        console.log("current balance:", this.balance);

    }
};

account.deposit(5000);
account.withdraw(3000);
account.withdraw(20000);
account.checkBalance();























