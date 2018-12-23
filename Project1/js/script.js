/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Array of 5 quote objects with actual quote, source, etc.
***/


var quotes = [

  {
    quote: "I think I am actually humble. I think I’m much more humble than you would understand.",
    source: "-President Donald J Trump, <i>2016</i>",
    image:  "<img class = 'pic' src='js/Images/DJT.jpg' alt='Donald Trump'>"

  },

  {
    quote: "[BLEEP] it Dude. Let's go bowling",
    source: "-Walter Sobchak, <i>1991</i>",
    image: "<img class = 'pic' src='js/Images/ws.jpg' alt='Walter Sobchak'>"

  },

  {
    quote: "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.",
    source: "Former President Barack Obama, <i>2013</i>",
    image:  ""

  },

  {
    quote: "You miss 100% of the shots you don't take",
    source: "Wayne Gretzky, <i>1999</i>",
    image: "<img class = 'pic' src='js/Images/wg.jpg' alt='Wayne Gretzky'>"

  },

  {
    quote: "I'm just about that action",
    source: "Marshawn Lynch, <i>2015</i>",
    image: ""

  }


];



/***
  Function "getRandomQuote", uses random # generator 5 numbers from 0-4 to access random quote objects in array.
  var selectedQuote and selectedSource hold source and quote values of object to be added to string
  Conditional used to add image into HTML if quote object has an image. Not all quotes will have images.
  Returns HTML string for quote statement, source, and image if applicable.
***/


function getRandomQuote() {

  var selectedQuote;
  var selectedSource;
  var randomQuote;

  var i = Math.floor(Math.random() * 5);
  selectedQuote = quotes[i].quote;
  selectedSource = quotes[i].source;

if (quotes[i].image != "")
      {

        randomQuote = "<p class='quote'>" + selectedQuote + "</p>" + "<p class='source'>" + selectedSource + "</p>" + quotes[i].image;

      }

      else {

        randomQuote = "<p class='quote'>" + selectedQuote + "</p>" + "<p class='source'>" + selectedSource + "</p>";

            }



return randomQuote

}




/***
New function "printQuote" calls "getRandomQuote", stores in variable inside
function so that everytime "printQuote" is called the "getRandomQuote" function is
invoked and new quote generated.
***/

function printQuote() {

  var printedQuote = getRandomQuote();

      document.getElementById("quote-box").innerHTML = printedQuote;


          }


printQuote();



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function.  ***/


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
