//functions

//Write the function dice that randomize an integer number between 1 and 6.

const dice = function() {
    return Math.floor(Math.random() * 6 + 1)
}

//console.log("This is dice 2: " + dice())

// Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.

const whoIsBigger = function (num1, num2) {
    if(num1 > num2) {
        console.log("The first is bigger")
    }
    if (num2 > num1) {
        console.log("The second is bigger")
    } else {
        console.log("both are the same")
    }
}

//whoIsBigger(11, 11)

//function that receives and returns a string split

const splitMe = (string) => {
    const arr = [];
    let word = '';
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      
  
      if (letter === ' ') {
        arr.push(word);
        word = '';
      } else {
        
  
        word += letter;
      }
      //check in order to push the last word
      if (i === string.length - 1) arr.push(word);
    }
    return arr;
  };
//console.log(splitMe ("Hello there fellow human"))

//Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.

const deleteOne =  (string, bool) => 
    bool ? string.slice(1) : string.slice(0, -1);
// if true slice first letter : > if not last letter
//console.log(deleteOne("hello", false));

// eliminayte letters from strin 

const onlyLetters = (string) => string.replace(/\d/gi, '');

//console.log(onlyLetters("i l378274ove what83727ev23783er"))

//check for valid email 
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

//console.log(ValidateEmail("ngdgg"));

//return current day of week

const whatDayIsIt = () => 
['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].find((_, idx) => idx === new Date().getDay() - 1);

//console.log(whatDayIsIt())

//Write the function howManyDays that receives a date and returns the number of days that has passed since that day.

const howManyDays = (date) => 
Math.floor((new Date() - new Date(date)) / 86400000)

//console.log(howManyDays('2-5-2002'))

//is today my birthday

const isTodayMyBirthday = (bdayDate) => {
    const bday = new Date (bdayDate);
    const day = bday.getDay();
    const month = bday.getMonth();
    const now = new Date();
    const nowDay = now.getDay();
    const nowMonth = now.getMonth();
    return day === nowDay && month === nowMonth;
}

//console.log(isTodayMyBirthday(17-02-2021))

//movies array exercises

const movies = [
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Year: '2001',
      imdbID: 'tt0120737',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Year: '2003',
      imdbID: 'tt0167260',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings: The Two Towers',
      Year: '2002',
      imdbID: 'tt0167261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of War',
      Year: '2005',
      imdbID: 'tt0399295',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'Lords of Dogtown',
      Year: '2005',
      imdbID: 'tt0355702',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
    },
    {
      Title: 'The Lord of the Rings',
      Year: '1978',
      imdbID: 'tt0077869',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1990',
      imdbID: 'tt0100054',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
    },
    {
      Title: 'The Lords of Salem',
      Year: '2012',
      imdbID: 'tt1731697',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
    },
    {
      Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
      Year: '1984',
      imdbID: 'tt0087365',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
    },
    {
      Title: 'Lord of the Flies',
      Year: '1963',
      imdbID: 'tt0057261',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
    },
    {
      Title: 'The Avengers',
      Year: '2012',
      imdbID: 'tt0848228',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Infinity War',
      Year: '2018',
      imdbID: 'tt4154756',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Age of Ultron',
      Year: '2015',
      imdbID: 'tt2395427',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
    },
    {
      Title: 'Avengers: Endgame',
      Year: '2019',
      imdbID: 'tt4154796',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
    },
  ];

// Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.

const deleteProp = (obj, str) => {
    delete obj [str];
    return obj
}

//oldest movie in array

const oldestMovie = (movies) => 
movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))[0].Title

console.log(oldestMovie(movies))

const countMovies = (movies) => movies.length;
console.log(countMovies(movies))

//only titles

const onlyTitles = (movies) => movies.map((movie) => movie.Title)

console.log(onlyTitles(movies))

// > year 2000

const onlyThisMillenium = (movies) => movies.filter((movie) => parseInt(movie.Year) >= 2000)

console.log(onlyThisMillenium(movies))

//movies by their id

const getMovieById = (movies, id) => movies.find((movie) => movie.imdbID.toLowerCase() === id.toLowerCase())

console.log(getMovieById(movies, 'dsd4'))

//sum of years

const sumYears = (movies) => movies.reduce((acc, cv) => acc + parseInt(cv.Year), 0);

console.log(sumYears(movies))

//half tree

const halfTree = (height) =>
[...Array(height)].map((_, idx) => '*'.repeat(idx + 1)).join("\n");


//console.log(halfTree(6))

//full tree

const tree = (height) =>
 [...Array(height)]
 .map(
     (_, idx) =>
     ' '.repeat((height * 2 - 1 - (idx * 2 + 1)) / 2) + 
     '*'.repeat((idx * 2 + 1) + 
     ' '. repeat((height * 2 - 1 - (idx * 2 + 1)) / 2)
     )
     
 )
.join('\n');

console.log(tree(25))

console.log("hello")
