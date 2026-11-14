// function ticketPrice(age,role){
//     if(role === "teacher"){
//         return 0;
//     } else if ( age < 13 ){
//         return 5;
//     }else if(age >= 13 && age <= 19){
//         return 8;
//     }else if ( age >= 20){
//         return 12;
//     }
// }
// console.log(ticketPrice(12,"student"));
// console.log(ticketPrice(20, "student"))



// function getGrade(score){
//     if(score >=90 && score <= 100){
//         return ("A");
//     }else if(score >= 80 && score <= 89 ){
//         return ("B");
//     }else if(score >= 70 && score <= 79){
//         return ("C");
//     }else if(score >= 60 && score <= 69 ){
//         return ("D");
//     }else if(score < 60){
//         return ("Failed")
//     }
// }

// console.log(getGrade(69))



// function calculateAge(birthYear){
//     return 2026 - birthYear;
// }
// let age = calculateAge(2020)
// console.log(age)


// function calculateTotal(price, quantity){
//     return price * quantity;
// }

// let totalAmount = calculateTotal(5000, 4);
// console.log(totalAmount);


// function checkNumber(number) {

//     if (number % 2 === 0) {
//         return "Even number";
//     } else {
//         return "Odd number";
//     }
// }
// //console.log(checkNumber(3))


// function checkTemperature(temperature) {
//     if (temperature >= 25) {
//         return "It is hot"
//     } else {
//         return "It is cold"
//     }
// }

// let weather = checkTemperature(30);
// //console.log(weather)


// function calculateDiscount(price, discount) {

//     let discountAmount = price * discount / 100

//     let finalPrice = price - discountAmount

//     return finalPrice;
// }

// let result = calculateDiscount(100000, 10);
// // console.log(result);


// function calculateSalary(basicSalary, allowance) {
//     let totalSalary = basicSalary + allowance;
//     return totalSalary;
// }

// let salary = calculateSalary(500000, 150000);
// //console.log(salary);


// function calculateGrade(exam1, exam2) {

//     // Step 1: Calculate the average
//     let average = (exam1 + exam2) / 2;

//     // Step 2: Determine the grade
//     let grade;

//     if (average >= 80) {
//         grade = "A";
//     } else if (average >= 70) {
//         grade = "B";
//     } else if (average >= 60) {
//         grade = "C";
//     } else if (average >= 50) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     // Step 3: Return the average and grade
//     return {
//         average: average,
//         grade: grade
//     };
// }

// // Step 4: Call the function
// let result2 = calculateGrade(60, 75);

// Step 5: Display the result
// console.log("Average: " + result2.average);
// console.log("Grade: " + result2.grade);

// function loginUser(username, password) {
//     if (username === "aghjkd" && password === "12345") {
//         return "Login successful!"
//     } else {
//         return "Incorrect username or password"
//     }
// }

// let user = loginUser("admin", "12345");
//console.log(user);



// function calculateTicketPrice(adults, children) {
//     let adultTicket = adults * 15000;
//     let childrenTicket = children * 8000;

//     let totalAmount = adultTicket + childrenTicket;


//     if (totalAmount > 50000) {
//         return "You are qualified for special booking"
//     } else {
//         return "Thank you for booking"
//     }
// }

// let bill = calculateTicketPrice(1, 2)
//console.log(bill);


// function checkBudget(price, budget) {
//     if (budget >= price) {
//         return "You can afford"
//     } else {
//         return "insufficient funds"
//     }
// }

// let result3 = checkBudget(80000, 1000);
//console.log(result3);



//console.log(greet(name))

//FUNCTION DECLARATION//

// function greet() {
//     //console.log("Hello!")
// }
//test

// function checkPassword(password) {
//     if (password.length >= 8) {
//         return "Strong password"
//     } else {
//         return "Password is too short"
//     }
// }
// let code = checkPassword("javas");
//console.log(code);

// function calculateDelivery(distance) {
//     if (distance >= 0 && distance <= 5) {
//         return "Delivery fee : UGX 5000"
//     } else {
//         return "Delivery fee : UGX 10000"
//     }
// }

// let fee = calculateDelivery(8);
//console.log(fee);


//FUNCTION EXPRESSION//

// const greet = function(){
//     //console.log("Hello");
// }
// greet();


// const calculateTax = function (price, taxRate) {
//     let tax = price * taxRate / 100
//     return tax;
// }

// let taxAmount = calculateTax(50000, 18)
//console.log(taxAmount);


// const withdrawMoney = function (balance, withdrawal) {
//     if (balance >= withdrawal) {
//         return "Withdrawal successful"
//     } else {
//         return "insufficient balance"
//     }
// }
// let amount = withdrawMoney(1000, 30000);
//console.log(amount);

// function sum(a, b) {
//     return a + b;
// }
//let addition = sum(2,5);
//console.log(sum(2,9))

// function prod(a, b) {
//     return a * b;
// }

//console.log(prod(2,3))

// const calculateTotal = function (itemPrice, quantity2) {

//     let total2 = itemPrice * quantity2


//     if (total2 > 100000) {
//         return "You qualify for free delivery";
//     } else {
//         return "Delivery fee applies"
//     }
// }

//console.log(calculateTotal(10000, 4));


// const addNumbers = function (a,b){
//     return a + b;
// };

// let result4 = addNumbers(10,20);
// //console.log(result4);



// //ARROW FUNCTIONS

// const greet =()=>{
//     //console.log("Hello")
// };
// greet();

// //Short arrow function

// const add = (a,b)=> a+b;
// //console.log(add(5,10));

// const calculateAge2 = (birthYear2) => {
//  let age2 = 2023 - birthYear2
//     return age2;
// }

//console.log(calculateAge2(2000));

// const checkNumber2 = (number)=>{
//     if(number % 2 === 0){
//         return "Even number";
//     }else{
//         return "Odd Number";
//     }
// }
//  console.log(checkNumber2(4))


// const checkNumber2 = number => {
//     if(number % 2 === 0){
//         return "Even";
//     } else{
//         return "Odd";
//     }
// }
// console.log(checkNumber2(6))


//Funnction declation

// function findGrade(math,eng,sci){
//     let totalMarks = math + eng + sci;
//     let avrMarks = (totalMarks)/3;

//     if(avrMarks >= 80){
//         return "A";
//     }else if(avrMarks >= 70){
//         return "B";
//     }else if(avrMarks >= 60){
//         return "C"
//     }else if(avrMarks >= 50){
//         return "D"
//     }else if(avrMarks < 50){
//         return "F"
//     }


// }

// console.log(findGrade(50,49,90));


//Function Expression

// const findGrade = function(math, eng, sci){
//     let totalMarks = math + eng + sci;
//     let avrMarks = (totalMarks)/3;

//     if(avrMarks >= 80){
//         return "A";
//     }else if(avrMarks >= 70){
//         return "B";
//     }else if(avrMarks >= 60){
//         return "C"
//     }else if(avrMarks >= 50){
//         return "D"
//     }else if(avrMarks < 50){
//         return "F"
//     }
// }

// console.log(findGrade(50,49,90));


//Arrow function

// const findResults = (math, eng, sci) => {
//     let totalMarks = math + eng + sci;
//     let avrMarks = (totalMarks) / 3;
//     let grade;

//     if (avrMarks >= 80) {
//         grade = "A";
//     } else if (avrMarks >= 70) {
//         grade = "B";
//     } else if (avrMarks >= 60) {
//         grade = "C"
//     } else if (avrMarks >= 50) {
//         grade = "D"
//     } else {
//         grade = "F"
//     } 

//     console.log("Students Results");
//     console.log("Mathematics:", math);
//     console.log("English:", eng);
//     console.log("Science:", sci);
//     console.log("Total Marks:", totalMarks);
//     console.log("Average:", avrMarks.toFixed(2));
//     console.log("Grade:", grade);
// }

// findResults(85,75,90)

// function greetingProgram(name,language){
//     console.log("Hello, " + name);
//     console.log("Your language is " + language);
//     console.log("Welcome to programing");

// }

// greetingProgram("Raissa", "Javascript");



// function personInfo(name, course, university){
//     console.log("Name:", name);
//     console.log("Course:", course);
//     console.log("University:", university);

// }

// personInfo("Joan", "Procurement", "CUU");


//High Order Functions

// function greet(name){
//     console.log("Hello, " + name)
// }
// function processUser(callback){
//     callback("Ketsia");
// }

// processUser(greet)

// function sayHello(){
//     console.log("Hello there ")
// }

// function executeFunction(callback){
//     callback();
// }

// executeFunction(sayHello);

// function welcome(name){
//     console.log("Welcome to JavaScript, ", name)
// }

// function greetUser(callback){
//     callback("Melanie");
// }

// greetUser(welcome);



// function add(a,b){
//     return a + b;
// }

// function calculate(callback){
//     let result = callback(10,5)
//     console.log(result)
// }

// calculate(add);



// function studentName(name){
//     console.log("Welcome," + name)
// }
// function greetStudent(callback){
//     callback("Ama")
// }

// greetStudent(studentName);


// function multiply(a,b){
//     return a * b;
// }

// function calculate(a,b,callback){
//   let result = callback(a,b);
//   console.log(result);

// }
// calculate(6,4,multiply)

// function calculateTotal(mark1, mark2){
//     return mark1 + mark2;
// }
// function displayResults(mark1, mark2, callback){
//     let results = callback(mark1, mark2)
//     console.log(results)
// }
// displayResults(70, 85, calculateTotal);


// function addBonus(salary, bonus){

//     return salary + bonus;

// }

// function processSalary(salary,bonus,callback){
//     let finalSalary = callback(salary,bonus)
//     console.log(finalSalary)
// }

// processSalary(500000,100000, addBonus)


// function applyDiscount(price, discount){
//     let discountedPrice = price - discount
//     return discountedPrice
// }

// function processPurchase(price, discount, callback){
//     let finalPrice = callback(price, discount);
//     console.log(finalPrice);

// }

// processPurchase(200000, 30000, applyDiscount)

// function run(callback){
//     console.log("Start");
//     callback();
//     console.log("End")
// }
// function middle(){
//     console.log("Middle")
// }
// run(middle);


// function add(a,b){
//     return a + b;
// }
// function calculate(a,b,operation){
//     return operation(a,b)
// }

// calculate(5,6, add)


// function sayHello(){
//     console.log("Hello")
// }
// function execute(func){
//      func()

// }

// execute(sayHello);

// function double(n){
//     return n * 2;
// }

// function processNumber(num,callback){

//     return callback(num)
// }

// let number = processNumber(10, double);
// console.log(number)


// function isEven(num) {
//     if (num % 2 === 0) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// function filterNumber(num, checkFunc) {
//     if (checkFunc(num) === "true") {
//         return "Valid"
//     } else {
//         return "Invalid"
//     }
// }

// let final = filterNumber(6, isEven);
// console.log(final)

// function processOrder(price, discount, print){
//     let newPrice = discount(price) //first callback
//     print(newPrice) // second callback


// }
// function twentyOff(p){
//     return p * 0.8;
// }
// function printReceipt(price){
//     console.log("Your final price is: " + price)
// }

//processOrder(100, twentyOff, printReceipt);

//A function returning another

// function multiplier(){
//     return function(number){
//         return number * 2;
//     }
// }

// let double = multiplier();
// console.log(double(5));

// function sayHello(){
//     console.log("Hello, Welcome!")
// }
// function execute(callback){
//     callback()
    
// }
// execute(sayHello)


// function square(number){
//     return number * number;
// }

// function performOperation(number, callback){
//     let num = callback(number)
//     console.log(num)
// }

// performOperation(5, square);


//   function calculateTotal(price, quantity){
//     return price * quantity;
//   }
// function applyTax(total){
//     return total + (0.1 * total)
// }
// function processOrder(price, quantity, callback){
//     let total = calculateTotal(price, quantity)

//     let finalAmount = callback(total);
//     console.log(finalAmount)
// }

// processOrder(20000, 3, applyTax);

// function calculateSalary(basicSalary, allowance){
//     return basicSalary + allowance;
// }
// function deductTax(salary){
//     return salary - (0.05 * salary)
// }

// function processSalary(basicSalary, allowance, callback){
//     let grossSalary = calculateSalary(basicSalary, allowance)

//     let finalSalary = callback(grossSalary)
//     console.log(finalSalary);
// }
// processSalary(800000, 200000, deductTax);


// function formatName(name){
//     return name.toUpperCase();
// }
// function processName(name, callback){
//      let formattedName = callback(name)
//      console.log(formattedName);
// }
   
// processName("elikya", formatName);


// function checkGrade(marks){
//     if(marks >= 50){
//         return "Passed"
//     }else {
//         return "Failed"
//     }
// }

// function processStudent(marks, callback){
//     let result = callback(marks);
//     console.log(result);
// }

// processStudent(40, checkGrade);






