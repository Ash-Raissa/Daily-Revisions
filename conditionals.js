//If statement executes code only when a condition is true

let age = 20;

if (age >= 18) {
    //console.log("You are an adult.")
}

//if ... else statement used when you want something to happen if the condition is false.

let years = 16;
if (age >= 18) {
    //console.log("You are an adult")
} else {
    //console.log("You are underage")
}

//if ... else...if...else statement used when you have several conditions to check

let marks = 75;

if (marks >= 80) {
    //console.log("Grade A");
} else if (marks >= 70) {
    //console.log("Grade B");
} else if (marks >= 50) {
    //console.log("Grade C");
} else {
    //console.log("Fail");
}

//Comparison operators
//== : Equal value, === : Equal value and type, != : not equal, !== Not equal and type, > greater than, < less than, >= greater than or equal, <= less than or equal

let age2 = 25;
let hasID = true;

if (age >= 18 && hasID === true) {
    //console.log("Access granted");
} else {
    //console.log("Access Denied")
}

let result = 72;

if (result >= 80) {
    //console.log("Excellent")
} else if (result > 70) {
    //console.log("Very good")
} else if (result > 50) {
    //console.log("Good")
} else {
    //console.log("Fail")
}

let customer = {
    name: "Sam",
    age: 25,
    isMember: true,
    purchaseAmount: 10000
};

function calculateDiscount(customer) {
    if (customer.isMember === true && customer.purchaseAmount >= 100000) {
        return customer.name + " gets a discount of 20%"
    } else if (customer.isMember === true && customer.purchaseAmount < 100000) {
        return customer.name + " gets a discount of 10%"
    } else if (customer.isMember === false && customer.purchaseAmount >= 100000) {
        return customer.name + " gets a discount of 5%"
    } else {
        return customer.name + " gets no discount"
    }
}

//console.log(calculateDiscount(customer))

let person = {
    name: "Michael",
    department: "HR",
    experience: 3,
    isAvailable: true
}

// if(person.department === "IT" && person.isAvailable === true){
//     console.log("Assigned to technical support"); 
// }else if (person.department === "HR" && person.isAvailable === true){
//     console.log("Assigned to recruitment")
// }else if(person.isAvailable === false){
//     console.log("Person unavailable")
// }else{
//     console.log("No task assigned")
// }

let user = {
    username: "Michael",
    password: "hello123",
    isActive: true
}

function login() {
    if (user.password === "hello123" && user.isActive === true) {
        return "Login Successful!"
    } else if (user.password !== "hello123") {
        return "Incorrect password"
    } else if (!user.isActive) {
        return "Account disabled"
    } else {
        return "Login failed"
    }
}
//console.log(login())

//One if statement inside another

let account = {
    balance: 500000,
    pin: 1234,
    isActive: true
};

function withdrawMoney(amount, enteredPin) {

    if (!account.isActive) {
        return "Account is disabled";
    }

    else {
        if (enteredPin !== account.pin) {
            return "Incorrect PIN";
        }

        else {
            if (account.balance >= amount) {
                return "Withdrawal successful";
            }

            else {
                return "Insufficient funds";
            }
        }
    }
}

//console.log(withdrawMoney(100000, 1234));

function checkTemperature(temperature) {
    if (temperature > 30) {
        return 'It is hot'
    } else {
        if (temperature <= 30 && temperature >= 20) {
            return 'It is warm'
        } else {
            return "it is cold"
        }
    }
}

//console.log(checkTemperature(25));


//Using Ternary operator

//structue
//condition ? valueIfTrue : valueIfFalse;
//? - what happens if the condition is true
//: what happens if the condition is false.

let girl = 18;

let lady = girl >= 18 ? "Adult" : "Minor";

//console.log(lady);

let age3 = 10;

let outcome = age3 >= 18 ? "can drive" : "cannot drive";

//console.log(outcome)

let passwd = "javascript123";

let code = passwd.length >= 8 ? "strong password" : "Password too short"

//console.log(code);

let client = {
    isMember: true,
    purchaseAmount: 500
}

let final = client.isMember === true && client.purchaseAmount >= 50000
    ? "Free delivery"
    : "Delivery fee applies";
//console.log(final)

let labourer = {
    name: "Sarah",
    yearsWorked: 4,
    performance: 85
};

let labourOutcome = labourer.yearsWorked >= 3 && labourer.performance >= 80
    ? "Bonus awarded"
    : "No bonus";
//console.log(labourOutcome);

//Switch statements 


let light = "Red";

// switch (light) {
//     case "Red":
//         console.log('stop');
//         break;
//     case "Yellow":
//         console.log("Get ready");
//         break;
//     case "Green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid Traffic light")
// };


let num1 = 20;
let num2 = 5;
let operator = "*"

function calculate() {

    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;

        default:
            return "Invalid Operator";
    }
}
//console.log(calculate())

let order = {
    customer: "Sarah",
    amount: 150000,
    paymentMethod: "card"

};

function processPayment() {
    switch (order.paymentMethod) {
        case "Cash":
            return "Paying with cash";
        case "Mobile money":
            return "Paying with mobile money";
        case "card":
            return "Paying with card";
        default:
            return "Invalid payment method";
    }
}

//console.log(processPayment());


let purchase = {
    customer: "Daniel",
    shippingMethod: "express"
};

function calculateDelivery(purchase) {
    switch (purchase.shippingMethod) {
        case "standard":
            return "Delivery in 5-7 days";
        case "express" :
            return "Delivery in 1-2 days";
        case "pickup":
            return "collect your order";
        default:
            return "invalid shipping method"
    }
}

//console.log(calculateDelivery(purchase));














