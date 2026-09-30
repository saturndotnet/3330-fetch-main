function loadMoviesText(movieOneStr){
   console.log("DEBUG: ", movieOneStr);
   movieOneStr.split("\n").forEach(movie => {
      document.querySelector("#fetch-movies-text").innerHTML += movie + "<br>" ;
   })
}

function loadMovies(movies){
   const target = document.querySelector("#fetch-movies-json");
   movies.forEach(movie => {
       target.innerHTML += `${movie.title} (${movie.year})<br>`;
    });
}

function loadActors(actors){
   const target = document.querySelector("#fetch-actors");
   actors.forEach(actor => {
       target.innerHTML += `<strong>${actor.title} </strong><br>`;      
       const castMembers = actor.cast;
       castMembers.forEach(member => {
         target.innerHTML += `${member}<br>`;   
       });
       target.innerHTML += "<br>";
    });
}

function loadDirectors(directors){
   const target = document.querySelector("#fetch-directors");
   directors.forEach(director => {
       target.append(`${director.movie} (${director.director})`);      
       target.innerHTML += "<br>";
    });
}

// ******************* Write your code below *********************************


// *************************************************
// 1. Use the Fetch API to read the contents of movies.txt
// and pass the retrieved data to the loadMoviesText function.
// *************************************************
fetch("data/movies.txt") // path to file
.then(response => response.text()) // handles the response obj as text
.then((data) => { // handles the data within the file
console.log(data); // process data
console.log(movies);
loadMoviesText(data);
})






// *************************************************
// 2. Use the Fetch API to read the movies, actors, and directors
// JSON files, and call the appropriate functions to display
// the JSON data in the HTML.
// *************************************************
fetch("data/movies.json") // path to JSON file
.then(response => response.json()) // handles the response obj as JSON
.then((actors) => { // handles the data within the JSON file
console.log(actors); // process the JSON Object
loadActors(actors);
});

fetch("data/directors.json") // path to JSON file
.then(response => response.json()) // handles the response obj as JSON
.then((directors) => { // handles the data within the JSON file
console.log(directors); // process the JSON Object
loadDirectors(directors);
});

//do the same for movies.json
fetch("data/movies.json") // path to JSON file
.then(response => response.json()) // handles the response obj as JSON
.then((movies) => { // handles the data within the JSON file
console.log(movies); // process the JSON Object
loadMovies(movies);
});






// *************************************************
// 3. Refactor the function that loads movies as JSON
// to include error handling. 
// NOTE: all functions that load data from an API should
// handled potential network and https status errors.
// *************************************************
fetch("data/movies.txt") // path to JSON file
.then(response => response.text()) // handles the response obj as text
.then((movies) => { // handles the data within the text file
console.log(movies); // process the text data 
loadMoviesText(movies);
}).catch((error) => {
    console.error("Fetch failed.", error);
});

//error handling might be on the exam
//fyi use select + ctrl + / (forward slash) to comment/uncomment multiple lines at once



// // *************************************************
// // 4. Rewrite the function loadMoviesText as a IIFE function
// // *************************************************
(function loadMoviesText(movieOneStr){
   console.log("DEBUG: ", movieOneStr);
   movieOneStr.split("\n").forEach(movie => {
      document.querySelector("#fetch-movies-text").innerHTML += movie + "<br>" ;
   })
})("This is a call to the IIFE function");






// // *************************************************
// // 5. Rewrite the function loadMoviesText as a IIFE Arrow function 
// // *************************************************
// to make any function an error, take the name out and leave the parenthesis and add an arrow
((movieOneStr)=>{
   console.log("DEBUG: ", movieOneStr);
   movieOneStr.split("\n").forEach(movie => {
      document.querySelector("#fetch-movies-text").innerHTML += movie + "<br>" ;
   })
})("This is a call to the IIFE function #3.");








// // *************************************************
// // 6. Refactor the code that fetches movie data in a JSON format
// // as a async-await funciton
// // *************************************************
// async function fetchMovies() {
//    const response = await fetch("data/movies.json");
//    const movies = await response.json();

//    console.log("Using async-await function to fetch movies:", movies);
//    loadMoviesJson(movies);
// }
// getMovies();







// // *************************************************
// // 7. Refactor the function getMovies as an IIFE function
// // *************************************************
(async function fetchMovies() {
   const response = await fetch("data/movies.json");
   const movies = await response.json();

   console.log("Using async-await function to fetch movies:", movies);
   loadMoviesJson(movies);
})();








// // *************************************************
// // 8. Refactor the function getMovies as an IIFE arrow function
// // *************************************************
// do the same thing u did in 5
(async () => {
   const response = await fetch("data/movies.json");
   const movies = await response.json();

   console.log("Using async-await function to fetch movies:", movies);
   loadMoviesJson(movies);
})();








// // *************************************************
// // 9. Take the last IFEE arrow function and handle network error
// // using try... catch
// // *************************************************
(async () => {
   try {
      const response = await fetch("data/movies.json");
      const movies = await response.json();

   console.log("Using async-await function to fetch movies:", movies);
   loadMovies(movies);
   } catch (error) {
      console.error("unexpected error", error);
   }
})();









// // *************************************************
// // 10. Take the last IFEE arrow function and handle both network and HTTP errors
// // using try... catch
// // *************************************************







