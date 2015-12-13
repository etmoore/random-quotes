var quotes = [
  {
    body: "Rudeness is the weak man's imitation of strength.",
    author: "Eric Hoffer"
  },
  {
    body: "If you're not making mistakes, then you're not doing anything.",
    author: "John Wooden"
  },
  {
    body: "To lament that we shall not be alive a hundred years hence, is the same folly as to be sorry we were not alive a hundred years ago.",
    author: "Michel de Montaigne"
  },
  {
    body: "Teaching is like trying to hold 35 corks underwater at once.",
    author: "Mark Twain"
  },
];

function getRandomQuote(){
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayNewQuote(){
  var quote = getRandomQuote();
  $('.quote-body').text(quote.body);
  $('.quote-author').text(quote.author);
  $('a#b').attr(
    'href',
    'https://twitter.com/intent/tweet?text=' + quote.body + ' - ' + quote.author
  )
}

$('button').on('click', displayNewQuote);

displayNewQuote();
