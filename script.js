// let color ="black";
// let positiveNumber = 7;
// let bool = true;
// let phoneNumber = "+962797864205";
// let firstName = "yousef";
// let lastName = "alsadoudi";
// //let fullName = firstName + lastName;
// console.log(firstName +" "+ lastName);

// let month =1;
// let day = 30;
// let hour = 24;
// let minte = 60;
// let second = 60;

// let numOfSecondInMonth = month * day * hour * minte * second;
// console.log(numOfSecondInMonth)


// let x = 1;
// const n = 5;
// x =-31;
// let num = x + 8 * n;

// console.log(num);

// const tip = 0.15; 
// const taxRate = 0.05;
// const coffeePrice = 4;

// const total = 2 * coffeePrice * (1 + tip + taxRate);
// console.log(total)


// let average = (5 * 74 + 2 * 85 + 3 * 90) / (5 + 2 + 3);

// console.log(average);

// let l= 90;
// let w = 5;

// let areaOfRectangle = l * w;
// let perimeterOfRectangle = 2 * ( l * w );
// console.log(`the area of Rectangte ${areaOfRectangle} and the perimeter of it ${perimeterOfRectangle}`);

// let radius = 5;

// let diameter = 2 * radius;
// let circumference = 2 * Math.PI * radius;

// console.log(`Diameter: ${diameter}m`);
// console.log(`Circumference: ${circumference}m`);


// let celsius = 30;
// let fahrenheit = celsius * 9 / 5 + 32;

// console.log(fahrenheit);

// function sayHello(){
//     return `Hello`;
// }

// console.log(sayHello());

// function increment(number){
//     return number-1;
// }
// console.log(increment(10));

// function isPositive(num){
//     if(num === 0){
//         return `the number ${num} is zero`;
//     }else if(num > 0){
//         return `the number ${num} is positive`;
//     }else if (num < 0){
//         return `the number ${num} is nigative`;
//     }else{
//         return `is not a number`;
//     }
// }
// console.log(isPositive(55));

// function double(numbers){
//     return numbers * 2;
// }
// console.log(double(100));

// function fullName(firstName, lastName){
//     return firstName + lastName;
// }
// console.log(fullName("yousef", " alsadoudi"))

// function average(num1, num2){
//     return (num1 + num2)/2;
// }
// console.log(average(5,10))

// function isEven(o){
//     if(o%2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isEven(10))

// function absoluteValue(x) {
//     if (x < 0) {
//         return x * -1;
//     } else {
//         return x;
//     }
// }
// console.log(absoluteValue(-5))

// function total(price, taxRate, tipRate) {
//     return price + (price * taxRate) + (price * tipRate);
// }
// console.log(total(10, 0.16, 0.05))


// function sumOfSquares(y1, y2) {
//     return Math.pow(y1, 2) + Math.pow(y2, 2);
// }
// console.log(sumOfSquares(12, 5))

// function isOlder(age1, age2) {
//     if (age1 > age2) {
//         return age1;
//     } else {
//         return age2;
//     }
// }
// console.log(isOlder(22, 21))

// function randomNumber() {
//     return Math.random();
// }
// console.log(randomNumber())

// function coinFlip() {
//     if (Math.random() < 0.5) {
//         return "heads";
//     } else {
//         return "tails";
//     }
// }
// console.log(coinFlip())

// function randomInRange(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(randomInRange(10, 15))


// let names = ["Yousef", "Ahmad", "Omar", "Ali"];
// function randomAgeGroup(names) {
//     let randomIndex = Math.floor(Math.random() * names.length);
//     return names[randomIndex];
// }

// console.log(randomAgeGroup(names));


// function canVote(age){
//     if(age >= 18){
//         return true;
//     }else{
//         return false;
//     } 
// }
// console.log(canVote(22));

// function getGrade(score){
//     if(score >= 90){
//         return "A";
//     }else if(90 > score && score >= 80){
//         return "B";
//     }else if(80 > score && score >=70){
//         return "C"
//     }else if(70 > score && score >=60){
//         return "D";
//     }else{
//         return "F";
//     }
// } 
// console.log(getGrade(85))

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }
// console.log(isLeapYear(2024));

// function canEnterClub(age, hasID) {
//     return age >= 18 && hasID;
// }
// console.log(isLeapYear(2000));


// function discountPrice(price, isMember) {
//     if (isMember) {
//         return price * 0.9;
//     } else {
//         return price;
//     }
// }
// console.log(discountPrice(100, true))
// console.log(discountPrice(100, false ))

// function triangleType(a, b, c) {
//     if (a === b && b === c) {
//         return "equilateral";
//     } else if (a === b || a === c || b === c) {
//         return "isosceles";
//     } else {
//         return "scalene";
//     }
// }
// console.log(triangleType(5, 5, 3));
// console.log(triangleType(5, 5, 5));
// console.log(triangleType(4, 5, 3));


// function canVote(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function canVote(age) {
//     return age >= 18 ? true : false;
// }

// function fizzBuzzOne(n) {
//     if (n % 3 === 0 && n % 5 === 0) {
//         return "FizzBuzz";
//     } else if (n % 3 === 0) {
//         return "Fizz";
//     } else if (n % 5 === 0) {
//         return "Buzz";
//     } else {
//         return String(n);
//     }
// }
// console.log(fizzBuzzOne(15));
// console.log(fizzBuzzOne(9));
// console.log(fizzBuzzOne(10));
// console.log(fizzBuzzOne(7));

// function bmiCategory(weight, height) {
//     let bmi = weight / (height ** 2);

//     if (bmi < 18.5) {
//         return "underweight";
//     } else if (bmi < 25) {
//         return "normal";
//     } else if (bmi < 30) {
//         return "overweight";
//     } else {
//         return "obese";
//     }
// }
// console.log(bmiCategory(86, 1.80))


// let colors =["red", "yallow", "green"]
// let vegetables =["tomato", "potato", "cucamber"]
// let food =[colors,vegetables]

// console.log(food[0][2])
// colors.push("purple")
// console.log(colors)
// colors.shift()
// console.log(colors)

// function addNumbers(array, string) {
//     array.push(string);
//     return array;
// }
// const arr=[1, 2, 3, 4, 5]
// console.log(addNumbers(arr, "6"))


// function concatStrings(array, string1, string2) {
//     return array.concat(string1, string2).join("-");
// }
// let array = ["A", "B"];

// console.log(concatStrings(array, "C", "D"));

// let names = ["yousef", "ahmad", "omar", "shadi"];
// function toUppercase(array) {
//     return array.map(element => element.toUpperCase());
// }
// console.log(toUppercase(names));

// function isUnique(array) {
//     return new Set(array).size === array.length;
// }
// console.log(isUnique([1, 2, 3, 4]))


// function removeDuplicates(array) {
//     return [...new Set(array)];
// }
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4]))


// function flattenArray(array) {
//     return array.flat(Infinity);
// }
// console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

// function chunkArray(array, chunkSize) {
//     let result = [];

//     for (let i = 0; i < array.length; i += chunkSize) {
//         result.push(array.slice(i, i + chunkSize));
//     }

//     return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))


// function sortByProperty(array, property) {
//     return [...array].sort((a, b) => {
//         return a[property] - b[property];
//     });
// }
// let students = [
//     { name: "Yousef", age: 25 },
//     { name: "Ahmad", age: 20 },
//     { name: "Omar", age: 23 }
// ]
// console.log(sortByProperty(students, "age"));


// function groupBy(array, property) {
//     let result = {};
//     for (let item of array) {
//         let key = item[property];
//         if (!result[key]) {
//             result[key] = [];
//         }
//         result[key].push(item);
//     }
//     return result;
// }
// let student = [
//     { name: "Yousef", city: "Amman" },
//     { name: "Ahmad", city: "Amman" },
//     { name: "Omar", city: "Aqaba" }
// ];
// console.log(groupBy(student, "city"));




// function grades(num){
//     if(num > 90){
//         return `A`;
//     }else if(num < 90 && num >= 80){
//         return `B`;
//     }else if(num < 80 && num >=70){
//         return `C`;
//     }else if(num < 70 && num > 60){
//         return `D`;
//     }else{
//         return `F`;
//     }
// }

// function leapYears(year){
//     return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }


// console.log(grades(85));
// console.log(leapYears(2004))



const myInfo = {
    name: "Yousef",
    age: 23
};
console.log(myInfo.age);
console.log(myInfo.name);
myInfo.name = "Ahmad";
console.log(myInfo.name);

const students = [
    { name: "Aya", age: 26 },
    { name: "Omar", age: 24 },
];
console.log(students[0].name);
console.log(students[1].name);


function createStudent(name, grade) {
    return {
        name: name,
        grade: grade,

        isPassing() {
            return grade >= 60;
        }
    };
}
const student1 = createStudent("Yousef", 80);
const student2 = createStudent("Omar", 50);

console.log(student1);
console.log(student1.isPassing());
console.log(student2.isPassing());

function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const personOpjects = {
    name: "Yousef",
    age: 22
};

const job = {
    company: "Dynamix",
    position: "Developer"
};

const results = mergeObjects(personOpjects, job);

console.log(results);


function pickKeys(obj, keys) {
    const result = {};

    for (const key of keys) {
        if (key in obj) {
            result[key] = obj[key];
        }
    }

    return result;
}
const person = {
    name: "Yousef",
    age: 23,
    city: "Amman",
    job: "Developer"
};

const result = pickKeys(person, ["name", "age"]);

console.log(result);


function objectToArray(obj) {
    const result = [];

    for (const key in obj) {
        result.push([key, obj[key]]);
    }

    return result;
}
const perso = {
    name: "Yousef",
    age: 23,
    city: "Amman"
};

console.log(objectToArray(person));

