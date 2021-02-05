/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote : "Be yourself; everyone else is already taken.",
    source : "Oscar Wilde"
  },
  {
    quote : "You only live once, but if you do it right, once is enough.",
    source : "Mae West",
    tags: "life"
  },
  {
    quote : "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source : "J.K. Rowling",
    citation: "Harry Potter and the Goblet of Fire"
  },
  {
    quote : "Humility is no substitute for a good personality",
    source : "Fran Leibowitz",
    citation: "Metropolitan Life",
    year: "1978"
  },
  {
    quote : "You have your moments. Not many of them, but you do have them",
    source : "Princess Leia",
    citation: "The Empire Strikes Back",
    year: "1980"
  }
];

/***
 * `getRandomQuote` function
***/


function getRandomQuote(){
  let randomNumber = Math.floor(Math.random()*5);
  return quotes[randomNumber];
}


/***
 * `printQuote` function
***/
function printQuote(){
  let randomQuote = getRandomQuote();
  let html = `<p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source}`;
  if(randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if(randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  if(randomQuote.tags){
    html += `<span class="tags"> - ${randomQuote.tags}</span>`;
  }
  html += "</p>";
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * `Random bakcground` function
***/
const backgroundColors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];

function getRandomBackground(){
  let randomBg = Math.floor(Math.random()*7);
  document.querySelector('body').style.backgroundColor = backgroundColors[randomBg];
}
document.getElementById('load-quote').addEventListener("click", getRandomBackground, false);


setInterval(printQuote,10000)
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);