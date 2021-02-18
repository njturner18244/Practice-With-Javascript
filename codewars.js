//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

let countBits = function (n) {
    const base = (n).toString(2).split('');
    const result = base.reduce((sum, num) => sum + Number(num), 0);

    return result;
}

console.log(countBits(7), 3)

function accum(str) {
    let letters = str.split(''); //splits
    let result = []; //empty array
    for (let i = 0; i < letters.length; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1). join(letters[i].toLowerCase()));
    }

    return result.join('-') //result joined 
}

console.log(accum("he he ha ah aha"))

function songDecoder(song) {
    return (
        song
        .split('WUB')
        .filter(Boolean)
        .join()
    )
}

console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))

//Given an array of integers, remove the smallest value. Do not mutate the original array/list. 

function removeSmallest(numbers) {
    var min = Math.min.apply(null, numbers);
    numbers.forEach((v, k, arr) => v !== min || arr.splice(k,1));
    return numbers;
}

console.log(removeSmallest([2, 1, 3, 4, 5, 1]));



//Cwars solution
/*function removeSmallest(numbers) {
    let indexOfMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
  }*/

  function calculateYears (principal, interest, tax, desired) {
     return Math.ceil(
         Math.log(desired / principal) /
         Math.log(1 + interest * (1 - tax))
     )
  }

  console.log(calculateYears(1000,0.01625,0.18,1200), 14)

  //Write Number in Expanded Form You will be given a number and will need to return it as a string in Expanded Form.

  const expandedForm = n => n.toString()
  .split("")
  .reverse()
  .map((a, i) => a * Math.pow(10, i))
  .filter(a => a > 0)
  .reverse()
  .join(" + ")

  console.log(expandedForm(43432443))

  const array1 = [1, 4, 9, 16]
  const map1 = array1.map(x => x * 76786) //how the map method works

  console.log(map1)

  const tat = "bonjour"
  console.log(tat.repeat(2).split("").reverse().join(" "))

  function cakes (recipe, available) {
      let maxCakes;
      for(let ingredient in recipe) {
          if(available[ingredient]) {
              const possibleCakes = Math.floor(
                  available[ingredient] / recipe[ingredient] || 0
              )
              if (!maxCakes || possibleCakes < maxCakes) {
                  maxCakes = possibleCakes
              }
          } else {
              return 0
          }
      }
      return maxCakes
  }


