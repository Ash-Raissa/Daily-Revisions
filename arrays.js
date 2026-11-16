let countries = ["Italy", "France", "Uganda", "Kenya", "Congo"];
//console.log(countries);
//first country
//console.log(countries[0]);
//third country
//console.log(countries[2]);
//last country
//console.log(countries[4]);
//numbers of countries
//console.log(countries.length);
//change kenya to tanzania
countries[3] = "Tanzania"
//console.log(countries);

//Adding an element in the array

countries.push("Mexico");
//console.log(countries);

countries.push("Japan");
//console.log(countries)

//Removing the last element in an array.

countries.pop();
//console.log(countries)

//Adding an element at the beginning of the array

countries.unshift("Brazil");
//console.log(countries);

//Removinng the first element
countries.shift();
//console.log(countries);



let list = ["Rice", "Sugar", "Milk", "Bread"];

list.push("Eggs");
list.shift();
list.unshift("cooking oil");
list.pop();
// console.log(list);
// console.log(list.length);

let students = ["Raissa", "John", "Mary", "David", "Sarah", "John"];

// console.log(students.includes("Mary"));
// console.log(students.includes("Peter"));
// console.log(students.indexOf("David"));
// console.log(students.lastIndexOf("John"));
// let isRegistered = (students.includes("Sarah"));
// if(isRegistered === true){
//     console.log("Sarah is registered");
// }else {
//     console.log("Not in the system");
// }

//slice() - extracting elements from an array without changing the original array.

// console.log(students.slice(1,4))

// console.log(students)

//splice() - Add, remove or replace elements.

// console.log(students.splice(1,2)) //removes the first John and Mary from the array
// //console.log(students.splice(1,2, "Divine")) //rremoves john and marry and adds divine
// console.log(students)



let employees = ["John", "Mary", "David", "Sarah", "Peter", "James"]

let selectedEmployees = employees.slice(1, 4); //extracting Mary, David and Sarah starting at 1, ending at 4
// console.log(selectedEmployees);

// console.log(employees)

employees.splice(2, 2); //removing David and Sarah. it's like start at 2 and remove 2 elements
employees.splice(2, 0, "Michael"); //adding michael at index 2: start at index 2, remove 0 element and insert Michael
// console.log(employees);
// console.log(employees.length);


let names = ["Brian", "Kevin", "Patricia", "Samuel", "Diana"];
//console.log(names) //original array

names.push("Monica", "Joseph");
//console.log(names)

names.pop();
//console.log(names)

names.unshift("Linda", "Robert");
//console.log(names)

names.shift();
//console.log(names)

let newArray = names.slice(1, 4);
//console.log(newArray);

names.splice(3, 1);
//console.log(names)

names.splice(3, 1, "Rebecca")
// console.log("original array", names)
// console.log("new array", newArray)



let workers = ["Jonathan", "Melissa", "Patrick"];
//console.log(workers); // original

workers.push("Cynthia", "Edward");
//console.log(workers);

workers.pop();
//console.log(workers);

workers.unshift("Thomas", "Brenda");
//console.log(workers);

workers.shift();
//console.log(workers);

let newWorkers = workers.slice(0, 3);
//console.log(newWorkers);

workers.splice(3, 1);
//console.log(workers);

workers.splice(2, 1, "Angela");
//console.log(workers);

// console.log("Original:", workers);
// console.log("New:", newWorkers);


let customers = ["Alice", "Daniel", "Rebecca"];
//console.log(customers);

customers.push("Peter", "Faith");
//console.log(customers);

customers.pop();
//console.log(customers);

customers.unshift("Brian", "Esther");
//console.log(customers);

customers.shift();
//console.log(customers);

let newCustomers = customers.slice(0, 3);
//console.log(newCustomers);

customers.splice(2, 1); //Daniel is on the index 1, this code says before you move to the 2 index  
//console.log(customers);

customers.splice(2, 1, "Grace");
//console.log(customers);

// console.log("Original:", customers);
// console.log("Original:", newCustomers);



// let farmers = ["Alice", "Brian", "Cynthian", "David", "Esther", "Frank"];
// console.log(farmers);

// //Remove 2 names starting from index 1
// farmers.splice(1,2);
// console.log(farmers);

// //Add Grace and Henry at index 2 without removing names
// farmers.splice(2,0, "Grace","Henry");
// console.log(farmers);

// //Remove 3 names starting from index 1
// farmers.splice(1, 3)
// console.log(farmers);

// //Replace name at index 1 with Kevin and Linda
// farmers.splice(1,1,"Kevin","Linda");
// console.log(farmers);

// farmers.splice(3,1, "Monica");
// console.log(farmers);


// The "before the index ends" logic applies only to Slice, with splice it tell you where to start and how many elements to remove.

// let products = ["Rice", "Sugar", "Beans", "Milk", "Bread", "Cooking oil"];
// console.log(products);

// //creating a new array of first three products
// let threeProducts = products.slice(0,3)
// console.log(products);

// //array containing beans, milk, bread
// let newProducts = products.slice(2,5);
// console.log(newProducts);

// //removing 2 products from index 1
// products.splice(1,2);
// console.log(products);

// //adding the products without removing anything starting from index 2
// products.splice(2,0, "Flour", "Salt");
// console.log(products);

// //Removing  3 products from index 1
// products.splice(1, 3);
// console.log(products)

// //Replacing array at index 1 with Tea
// products.splice(1,1,"Tea");
// console.log(products);

// //new array with last products

// let product2 = products.slice(-2);
// console.log(product2);



// let clothes = ["Shirt", "Jeans", "Dress", "Jacket", "Skirt"];
// console.log(clothes);

// //new array with the first three elements.
// let clothes2 = clothes.slice(0,3); //start at index 0 but stop before you get to index 3
// console.log(clothes2);

// //new array with Jeans, Dress, Jacket
// let newClothes = clothes.slice(1,4); //start at index 1 but stop before you get to index 4
// console.log(newClothes);

// //removing 2 elements starting from index 1.
// clothes.splice(1,2);
// console.log(clothes)

// //insert shoes and bags at index 2
// clothes.splice(2,0,"Shoes", "Bags");
// console.log(clothes);

// //Replace 2 elements from index 1
// clothes.splice(1,2,"Hoodie", "Trousers");
// console.log(clothes);

let results = [65, 80, 45, 90, 55];
//console.log(results);

results.push(75);
//console.log(results);

results.pop();
//console.log(results);

let results2 = results.slice(0, 3);
//console.log(results2);

// console.log("Results :", results);
// console.log("Results2 :", results2);

let numbers = [5, 12, 18, , 7, 25, 30, 9];

// let bigNumbers = numbers.filter(function(num){
//     return num > 10;
// })
//console.log(bigNumbers);


let prices = [10, 20, 30, 40, 50];

// let finalPrice = prices.map(function(a){
//     return a + 5;
// })
// console.log(finalPrice);


let students1 = ["John", "Mary", "David", "Sarah", "Peter"];

// students.forEach(function(student){
//     console.log(student);
// })


let salaries = [1500, 2500, 3000, 1800, 4000, 1200];

let bigSalaries = salaries.filter(function (salary) {
    return salary >= 2000;
})
//console.log(bigSalaries);

let updatedSalaries = bigSalaries.map(function (number) {
    let increase = number + (number * 0.1);
    return increase;
})
//console.log(updatedSalaries);

let companies = [
    { name: "Company one", category: "Finance", start: 1981, end: 2003 },
    { name: "Company two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company nine", category: "Retail", start: 1981, end: 1989 },

];

let ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//forEach
companies.forEach(function (company) {
    //console.log(company.category)
});

//Get 21 and older
//filter
const mature = ages.filter(function (age) {
    if (age >= 21) {
        return true
    }
})
//console.log(mature)
//OR

const mature2 = ages.filter(age2 => age2 >= 21);
//console.log(mature2)

const retailCompanies = companies.filter(function (company) {
    if (company.category === "Retail") {
        return true;
    }
})

//console.log(retailCompanies)

const techCompanies = companies.filter(company => company.category === "Technology")

//console.log(techCompanies);

// filter companies that started in the 80's

const oldies = companies.filter(company => company.start >= 1980 && company.start < 1990)

//console.log(oldies)

//filter companies that are 10yrs old

const lastedTenYears = companies.filter(function (company) {
    if ((company.end - company.start) >= 10) {
        return true;
    }
})

//console.log(lastedTenYears)

//five years and below


const fiveYears = companies.filter(function (company) {
    if ((company.end - company.start) <= 5) {
        return true;
    }
})
//console.log(fiveYears);


//map - creates new arrays

//create array of company names
const companyNames = companies.map(function (company) {
    //console.log(company.name);
    //console.log(`${company.name} (${company.start} - ${company.end})`);
})


//Power of every age
const ageMap = ages.map(function (age) {
    return Math.pow(age, 2)
})
//console.log(ageMap);

// let nums = [2,3,4,25]

// const newNumber = nums.map(x => Math.pow(x,2))

// const newNumber2 = nums.map(y=> Math.sqrt(y))

// console.log(newNumber2)


//sort
//sorting companies by the start year

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});
//console.log(sortedCompanies)




//reduce

//Get total for all ages

const ageSum = ages.reduce(function (total, age) {
    return total + age;
}, 0)

//console.log(ageSum)

const ageSum2 = ages.reduce((total, age1) => total + age1, 0);
//console.log(ageSum2)



let pupils = [
    { name: "Alice", marks: 75 },
    { name: "Brian", marks: 42 },
    { name: "Sarah", marks: 90 },
    { name: "Peter", marks: 35 },
    { name: "Davide", marks: 60 },
]

//students who scored 50 and above, reurn only their names, use filter() to select use map() to extract their names

// function getPassedStudent() {
//     return pupils

//         .filter(student => student.marks >= 50)
//         .map(student => student.name)
// }

// console.log(getPassedStudent());


let products = [
    { name: "Laptop", price: 1500 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 400 },
    { name: "Keyboard", price: 100 },
    { name: "Monitor", price: 600 }
]

function getExpensiveProducts() {
    return products.filter(function (produce) {
        return produce.price > 500
    })
        .map(function (produceName) {
            return produceName.name
        })
}
//console.log(getExpensiveProducts());

// console.log(
//     products
//     .filter(product => product.price > 500)
//     .map(product => product.name)
// )



let earners = [
    { name: "John", age: 25, salary: 3000 },
    { name: "Mary", age: 30, salary: 5000 },
    { name: "David", age: 22, salary: 2500 },
    { name: "Sarah", age: 28, salary: 4500 },
    { name: "Peter", age: 35, salary: 6000 }
]

// function getHighEarners(){
//     return earners.filter(function(worker){
//         return worker.salary > 3000
//     })
//     // .map(function(worker){
//     //     return worker.name
//     // })
//     .map(function(worker){
//         return worker.age
//     })
// }
// console.log(getHighEarners());



let orders = [
    { product: "Shoes", quantity: 2, price: 50 },
    { product: "Bag", quantity: 1, price: 30 },
    { product: "Watch", quantity: 3, price: 100 },
    { product: "Shirt", quantity: 2, price: 25 },
    { product: "Phone", quantity: 1, price: 500 },
]

function getExpensiveOrders() {
    return orders
        .filter(order => order.quantity * order.price > 100)
        .map(order => ({
            product: order.product,
            total: order.quantity * order.price

        }))

}

//console.log(getExpensiveOrders());

//Reduce - combines elements into one single value

let numerals = [10, 20, 30];

let total = numerals.reduce((sum, number)=>{
    return sum + number;
},0);
console.log(total)


let sales = [
    { product: "Laptop", quantity: 2, price: 1000 },
    { product: "Phone", quantity: 3, price: 500 },
    { product: "Tablet", quantity: 1, price: 300 },
    { product: "Monitor", quantity: 2, price: 400 },
    { product: "Keyboard", quantity: 5, price: 50 }
]

function calculateRevenue(){
    return sales
    .filter(product => product.price > 300)
    .map(product => product.price * product.quantity)
    .reduce((sum, number)=> sum + number, 0)
}
console.log(calculateRevenue())

























