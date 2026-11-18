//LOOPS

//numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    //console.log(i);
};

//numbers from 10 to 20
for (let i = 10; i <= 20; i++) {
    //console.log(i)
}

//even numbers between 2 and 20
for (let i = 2; i <= 20; i += 2) {
    //console.log(i)
}

//even numbers from 10 to 20
for (let i = 10; i <= 20; i += 2) {
    //console.log(i)
}

//Numbers from 10 t0 1
for (let i = 10; i >= 1; i--) {
    //console.log(i)
}

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
//console.log(sum);

let product = 1;
for (let i = 1; i <= 5; i++) {
    product = product * i;
}
//console.log(product)

let add = 0;

for (let i = 10; i >= 2; i -= 2) {
    add = add + i
}

//console.log (add)

//multiplication table 
// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} x ${i} = ${num * i}`);
//     }
// }
// multiplicationTable(3);

//counting number of vowels in a word

function countingVowels(word) {

    let count = 0;      //we start from zero because we haven't found any vowel yet

    for (let i = 0; i < word.length; i++) {

        if ("aeiou".includes(word[i].toLowerCase())) {
            count++;
        }

    }
    return count;
}

//console.log(countingVowels("banana"))

//i < word.length tells the loop to continue as long as it has checked every character
// word[i] accesses one character at a time.

//printing each character separately
let name = "Daniel"
for (let i = 0; i < name.length; i++) {
    //console.log(name[i]);
}

//printing characters in reverse
let word = "JavaScript";

for (let i = word.length - 1; i >= 0; i--) {
    //console.log(word[i])
}

//counting characters
let mot = "developer";
//let count = 0;

// for(let i = 0; i < mot.length; i++){
//     if(mot[i] === "e"){
//         count ++;
//     }
// }

//console.log(count);

let marks = [45, 80, 62, 30, 90, 55];


function countPassedStudent() {
    let count = 0;
    for (let i = 0; i < marks.length; i++) {
        if (marks[i] >= 50) {
            count++;
        }
    }
    return count;
}

//console.log(countPassedStudent());


//While loop repeats a block of code as long as a condition is true
let number = 1; //declaration

while (number <= 5) { //condition
    //console.log(number);
    number++; //increment
}

let num = 2;

while (num <= 10) {
    // console.log(num);
    num += 2
}

function countDown() {
    let number = 10;
    while (number >= 0) {
        //console.log(number);
        number--;
    }
}

countDown();

function calculateSum() {
    let number = 1;
    let total = 0;

    while (number <= 5) {

        total += number;
        number++;

    }
    return total

}

//console.log(calculateSum())


function sumEvenNumbers() {
    let num = 2;
    let total = 0;

    while (num <= 10) {
        total += num;
        num += 2
    }

    return total;
}

//console.log(sumEvenNumbers())

function countDivisibleByThree() {
    let number = 1;
    let count = 0;

    while (number <= 15) {
        if (number % 3 === 0) {
            count++;
        }
        number++

    }
    return count;

}

//console.log(countDivisibleByThree())


function countDivisibleByFive(){
    let number = 1;
    let count = 0;

    while(number <= 25){
        if(number % 5 === 0){
            count ++;
        }
        number ++;
    }
    return count;
}

//console.log(countDivisibleByFive());


function countEvenNumbers(){
    let number = 1;
    let count = 0;

    while(number <= 30){
        if(number % 2 === 0 && number > 10){
            count ++;
        }
        number ++;
    }
    return count;
}

//console.log(countEvenNumbers())






