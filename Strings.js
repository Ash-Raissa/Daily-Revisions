//string is simply a piece of text.

//STRING PORPERTIES AND METHODS

// let name = "Raissa";
// let country = "Uganda";
// let message = "Hello Welcome";

//.length
let name = "Javascript"

//console.log(name.length);

let word = "Hello World"; // .length counts even spaces.
//console.log(word.length)


let message = "I love JavaScript";

function countCharacters(message) {

    return message.length;


}
//console.log(countCharacters(message))

let career = "javascript developer";

function convertToUppercase(career) {
    return career.toUpperCase();
}

//console.log(convertToUppercase(career));

//to convert only the first character to upper case.

function capitalizeFirstLetter(career) {

    return career.charAt(0).toUpperCase() + career.slice(1);

}
//console.log(capitalizeFirstLetter(career));


// capitalize two words

function capitalizeWords(career) {
    return career
        .split(" ") //separates the sentence into words: ["javascript", "developer"]
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

}
//split - converts a string int an array of characters
//map() - goes through each word.
//charAt(0).toUpperCase() - capitalizes the first letter of each word
//slice() - keeps the remaining letters. (extracts part of a string)
//join(" ") - joins the words back together with spaces. (converts the array back into a string)

//console.log(capitalizeWords(career));


let faith = "born again";

function capitalize(faith) {
    return faith
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

//console.log(capitalize(faith));

//trim(), trimStart() and trimEnd()

let person = "   John    ";

//console.log(person.trim()); //removes spaces from both ends.

//console.log(person.trimStart()); //removes spaces from the beginning.

//console.log(person.trimEnd()); //removes spaces from the end.



let email = "  JOHNDOE@GMAIL.COM     ";

function cleanEmail(email) {
    return email
        .trim()
        .toLowerCase()

}
//console.log(cleanEmail(email));


//includes()
function checkUsername(username) {
    let cleaned = username.trim();

    if (cleaned.includes("admin")) {
        return "true";
    } else {
        return "false";
    }


}

// OR

function checkUsername(username) {
    let cleaned = username.trim();
    return cleaned.includes("admin")

}


// console.log(checkUsername("  superadmin123  "));
// console.log(checkUsername("john123"));
// console.log(checkUsername("admin_user"));

//includes() and endsWith()
function validateEmail(email) {

    let cleared = email.trim().toLowerCase();
    if (cleared.includes("@") && cleared.endsWith(".com")) {
        return true;
    } else {
        return false;
    }

}

// console.log(validateEmail("  JOHN@GMAIL.COM  "));
// console.log(validateEmail("mary@gmail.com"));
// console.log(validateEmail("peter@gmail"));
// console.log(validateEmail("jamesgmail.com"));



function validateUsername(username) {
    let name = username.trim().toLowerCase()
    return name.length >= 5 && !name.includes(" ")


}

// console.log(validateUsername("  Raissa  "));
// console.log(validateUsername("John"));
// console.log(validateUsername("Mary Jane"));
// console.log(validateUsername("Developer123"));


function checkPassword(password) {

    let pswd = password.trim()
    return pswd.length >= 8 && /\d/.test(pswd)


}

//console.log(checkPassword("Jamber12@"))

// /\d/ = regular expression (RegEx)
// \d means any digit from 0 to 9.
// .test checks whether a string matches a particular pattern.



//startWith() and endsWith()

//statWith - method checks whether a string begins with specific characters.

//syntax: string.startWith(searchValue);

let string = "JavaScript Developer";

// console.log(string.startsWith("Java"));
// console.log(string.startsWith("script"))

//endWith()
//this method checks whether a string ends with specific characters

//syntax: string.endWith(searchValue)


let filename = "profile.jpg";

// console.log(filename.endsWith(".jpg"));
// console.log(filename.endsWith(".png"));


function checkFile(filename) {

    return filename.startsWith("profile") &&
        filename.endsWith(".jpg");

}

// console.log(checkFile("profile.jpg"));
// console.log(checkFile("profile.png"));
// console.log(checkFile("picture.jpg"));
// console.log(checkFile("profile_photo.jpg"));


// replace () and replaceAll()

//Both methods are used to replace characters or words inside a string.

//replace - replaces the first occurence,
//syntax: string.replace(searchValue, newValue)

let mail = "I love JavaScript. JavaScript is amazing."
let result = mail.replace("JavaScript", "Python");

//console.log(result); //only the first occurence of JavaScript is replaced.


//replaceAll - replaces every occurence.

let result2 = mail.replaceAll("JavaScript", "Python")

//console.log(result2); //replaces both occurences of JavaScript


function cleanPhoneNumber(phoneNumber) {

    return phoneNumber.replaceAll("-", "").replaceAll(" ", "");

}

// console.log(cleanPhoneNumber("256-700-123-456"));
// console.log(cleanPhoneNumber("256 780 123 456"));
// console.log(cleanPhoneNumber("256-750 123-456"));


function formatName(fullName) {
    return fullName.replaceAll("_", " ").replaceAll("-", " ")
}

// console.log(formatName("john_doe"));
// console.log(formatName("mary-jane"));
// console.log(formatName("software_developer-junior"));


function formatUsername(username) {
    return username

        .trim()
        .toLowerCase()
        .replaceAll("_", "-")
        .replaceAll(" ", "-")
}

// console.log(formatUsername("  JOHN DOE  "));
// console.log(formatUsername("Mary_Jane"));
// console.log(formatUsername("  SOFTWARE_DEVELOPER "));
// console.log(formatUsername("John Doe_Developer"));


function cleanMessage(message) {
    return message
        .trim()
        .toLowerCase()
        .replaceAll("javascript", "JS")
        .replaceAll("_", " ");

}

// console.log(cleanMessage("  I LOVE JAVASCRIPT  "));
// console.log(cleanMessage("javascript_is_amazing"));
// console.log(cleanMessage("  LEARNING JAVASCRIPT IS FUN  "));


//repeat()
//This method repeats a string a specified number of times.

//syntax: string.repeat(count)


let word1 = "Hello";

//console.log(word1.repeat(3));

let symbol = "*";

//console.log(symbol.repeat(5));

//Using repeat() inside a function

function createLine(character, count) {
    return character.repeat(count);
}

// console.log(createLine("-", 10));
// console.log(createLine("*", 5));


function createPattern(character, number) {
    return character.repeat(number)
}

// console.log(createPattern("#", 4));
// console.log(createPattern("*", 6));
// console.log(createPattern("-", 3));


function createDivider(title, number) {
    let line = "-".repeat(number);

    return `${line}\n${title.toUpperCase()}\n${line}`;
}

// console.log(createDivider("javascript", 10));
// console.log(createDivider("developer", 5));


function repeatGreeting(name, number) {
    let greeting = "Hello " + name + "!";
    return greeting.repeat(number);
}

// console.log(repeatGreeting("Raissa", 3));
// console.log(repeatGreeting("John", 2));

function maskName(name) {
    name = name.toUpperCase();
    return name
        .slice(0, 2) + "*".repeat(5)
}

// console.log(maskName("Raissa"));
// console.log(maskName("Developer"));
// console.log(maskName("Michael"));

function createTag(name) {
    name = name.trim().toUpperCase()
    return "@" + name + "!".repeat(3)

}

//console.log(createTag("  Raissa  "));
// console.log(createTag(" John "));
// console.log(createTag(" Developer "));

function createNotification(message, number) {
    let notification = message.toUpperCase() + "..."
    return notification.repeat(number)
}

// console.log(createNotification("new message", 2));
// console.log(createNotification("welcome", 3));


//indexOf - tells you the position of a character or word inside a string

let term = "JavaScript";

//console.log(term.indexOf("S"));

//searching for entire words

let report = "I love JavaScript";

//console.log(report.indexOf("JavaScript")); //this word starts at index 7

let word2 = "Developer";
//console.log(word2.indexOf("z")); // when there is no character it returns -1

let word3 = "banana";
//console.log(word3.indexOf("a")); //returns the position of the first occurence of the repeated character

//console.log(word3.indexOf("a",2)); // you can tell JS where to begin searching


function findCharacter(word, character) {
    let position = word.indexOf(character)
    if (position !== -1) {
        return position;
    } else return "Not found";

}

// console.log(findCharacter("JavaScript", "S"));
// console.log(findCharacter("Developer", "e"));
// console.log(findCharacter("Computer", "z"));

function findWord(sentence, word) {
    sentence = sentence.toLowerCase();
    word = word.toLowerCase();
    let position2 = sentence.indexOf(word);

    if (position2 !== -1) {
        return position2
    } else {
        return "Word not found"
    }
}

// console.log(findWord("I love JavaScript", "javascript"));
// console.log(findWord("I am learning Node.js", "NODE.JS"));
// console.log(findWord("I love coding", "Python"));


function findCharacter(word, character) {
    word = word.toLowerCase();

    character = character.toLowerCase();

    let position = word.indexOf(character);

    if (position !== -1) {
        return position
    } else {
        return "Character not found"
    }
}

// console.log(findCharacter("JavaScript", "S")); // 4
// console.log(findCharacter("Developer", "E"));  // 1
// console.log(findCharacter("Programming", "M")); // 6
// console.log(findCharacter("Coding", "Z")); // "Character not found"


//lastIndexOf - finds the last occurence.

let word4 = "programming";
//console.log(word.lastIndexOf("m"));

let phrase = "I love JavaScript because JavaScript is fun";
//console.log(phrase.lastIndexOf("JavaScript"))

let text = "banaba";
//console.log(text.lastIndexOf("a"));

function findLastCharacter(sentence, character) {
    sentence = sentence.toLowerCase();

    character = character.toLowerCase();

    let position = sentence.lastIndexOf(character);
    if (position !== -1) {
        return position
    } else {
        return "Character not found"
    }

}
//console.log(findLastCharacter("JavaScript is amazing", "a"));
// 16

//console.log(findLastCharacter("Programming is fun", "m"));
// 7

//console.log(findLastCharacter("Developer", "e"));
// 7

//console.log(findLastCharacter("Hello World", "z"));
// "Character not found"

function findLastWord(sentence, word) {
    sentence = sentence.toLowerCase();

    word = word.toLowerCase();

    let position = sentence.lastIndexOf(word);
    if (position !== -1) {
        return position
    } else {
        return "word not found"
    }
}

// console.log(findLastWord("I love coding because coding is fun", "coding"));
// //22
// console.log(findLastWord("JavaScript is great and JavaScript is powerful", "javascript"));
// //24
// console.log(findLastWord("I love learning", "Python"));
// //"word not found"
// console.log(findLastWord("Hello hello HELLO", "hello"));
//12

//Incudes

function checkWord(sentence, word) {
    sentence = sentence.toLowerCase();

    word = word.toLowerCase();

    if (sentence.includes(word)) {
        return "Word found"
    } else {
        return "Word not found";

    }
}

// console.log(checkWord("I love JavaScript", "javascript"));
// console.log(checkWord("Node.js is powerful", "REACT"));
// console.log(checkWord("I am learning programming", "learning"));
// console.log(checkWord("Welcome to Uganda", "kenya"));











