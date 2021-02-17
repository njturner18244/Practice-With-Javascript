

function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    // Check whether the string is empty or not
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
    // Check if the length of the string is even or odd 
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    // If the length of the string is 1 then it becomes a palindrome
            if (cstr.length === 1) {
                console.log("Entry is a palindrome.");
                return true;
            } else {
    // If length of the string is odd ignore middle character
                ccount = (cstr.length - 1) / 2;
            }
        }
    // Loop through to check the first character to the last character and then move next
        for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match 
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("Entry is not a palindrome.");
                return false;
            }
        }
        console.log("The entry is a palindrome.");
        return true;
    }
    check_Palindrome('Nathan');
    check_Palindrome('nurses run');
    check_Palindrome('A man, Panama, canal');


//Write a JavaScript function that reverse a number.

function reverseNumber (num) {
    num = num + ""; //new empty variable
    return num.split("").reverse().join("") //splits into an array of strings, reverses, joins them back together
}

console.log(reverseNumber("647368476387678"))


//Write a JavaScript function that returns a passed string with letters in alphabetical order.

function orderedWords (str) {
    return str.split("").sort().join("");
}
console.log(orderedWords("xenophobia"))
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function uppercase(str) {
    let array1 = str.split(' ');
    let newArray1 = [];

    for(let x = 0; x < array1.length; x++) {
        newArray1.push(array1[x].charAt(0). toUpperCase(+array1[x].slice(1)));

    }

    return newArray1.join(' ');
}

console.log(uppercase("my name is nathan"))

/*Used functions :
The charAt() method is used to get the specified character from a string.
Syntax : str.charAt(index). Where index represents an integer between 0 and 1-less-than the length of the string.
The toUpperCase() method is used to convert the string value to uppercase.
The slice() method returns a shallow copy of a portion of an array into a new array object.
The push() method is used to add one or more elements to the end of an array and returns the new length of the array.
After completing the for loop return the final string :
return newarray1.join(' ');
The join() method joins all elements of an array into a string.*/


//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function findLongestWord (str) {
    let newArray = str.match(/\w[a-z]{0,}/gi);
    let result = newArray[0];
    for (let i = 1; i < newArray.length; i++) {
        if(result.length < newArray[i].length) {
            result = newArray[i];
        }
    }

    return result;
}

console.log(findLongestWord("My xenophobic Grandmother likes onomatopeaic poetry that are an expressive form of communication"))

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowels(str1)
{
  const vowels = 'aeiouAEIOU';
  let vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowels.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowels("I owe you one hundred ewes"))


   

//Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

function charCount(str, letter) {
    let letterCount = 0;
    for(let position = 0; position < str.length; position++){
        if(str.charAt(position) == letter) {
            letterCount += 1;
        }
    }
    return letterCount;
}

console.log("Your number of characters is " + charCount("Whagowan pift ting wots your bbm pin", "w"))



//Write a JavaScript function which accepts an argument and returns the type

function dateTypes(value) {
    let typesOfData = [Function, RegExp, Number, String, Boolean, Object], x, len;

    if (typeof value === "object" || typeof value === "function") {
        for (i = 0, len = typesOfData.length; x < len; i++) {
            if (value instanceof typesOfData[i]){
                return typesOfData[i]
            }
        }

    return typeof value;

    }
}

console.log(dateTypes(12));
console.log(dateTypes('w3resource'));
console.log(dateTypes(false));

//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

const isPrime = num => {
    for (let i = 2; i < num; i++)
    if(num % i === 0) return false;
    return num > 1;
}

console.log(isPrime(32232))

//Write a JavaScript function to compute the factors of a positive integer.

function factorNums(num) {
    if (num < 0) // reject if num is less than 0
    return -1; // returns this
    else if (num == 0) // if its 0 its factoral is one
    return 1;
    
    else {
        return (num * factorNums(num - 1)); //call recursion method
    }
}

console.log(factorNums(9))

//******** Arrays *******

//Write a JavaScript function to check whether an 'input' is an array or not.

const isArray = function(input) {
    if(toString.call(input) === "[object Array]")
    return "This brings joy";
    return "This does not bring joy";
};

console.log(isArray("My name is Jeff"))
console.log(isArray(["My name is Jeff"]))

//clone an array (ES6 method)

const movieGenres = ["Horror", "Thriller", "Fantasy", "Comedy"];
const clonedGenres = [...movieGenres]
clonedGenres.push("Action")
clonedGenres.sort()

console.log(clonedGenres)

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

let first = (arr, num) => { 
    if (!num){return arr[0]} 
    else if (num <0) {return [] } 
    else{return arr.slice(0,num)} 
}

console.log(first(["First", "dhsduhsurandd", "uhdushduh"]))

/*JavaScript: Get Unique Values of an Object Property in Array Entries
We can get the unique values of an object in array entries by mapping the values to an array.
Then we use the Set constructor, and then use the spread operator to convert that back to an array.*/

const bills = [{
    date: '2020-01-20',
    amount: '70',
    category: 'phone'
  },
  {
    date: '2020-01-20',
    amount: '20',
    category: 'gas'
  },
  {
    date: '2020-02-20',
    amount: '75',
    category: 'phone'
  }
]

const categories = [...new Set(bills.map(bill => bill.category))]

console.log(categories)

// return last element of array 

function arrEl(arr, n) {
    return arr.reverse().slice(0, n).reverse();
    }
    console.log(arrEl([1, 2, 3, 4, 5], 3)); //[3,4,5]

//Write a simple JavaScript program to join all elements of the following array into a string.

const colors = ["red", "orange", "pink", "gold", "silver"]

console.log(colors.toString());
console.log(colors.join());
console.log(colors.join(" & "))


//const toLower = str => str.replace(/\w{1}/g, ch => ch.match(/[a-z]&)/) ? ch.toUpperCase() : ch.toLowerCase())
const invertCase = str => str.replace(/\w{1}/g, ch => ch.match(/[a-z]/) ? ch.toUpperCase() : ch.toLowerCase());
console.log(invertCase("The Quick Brown Fox"))