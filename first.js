var quotes = [
    "Either you run the day or the day runs you!",
    "Strength is Weakness",
    "Feel the code",
    "May the source be with you",
    "DCI, everything is possible ;)",
    "Whether you think you or you think you can’t, you’re right",
    "Aim for failure and you always succeed"
  ];

  function newquote() {
    var i = Math.floor(Math.random() * (quotes.length));

    document.getElementById('quote').innerHTML = quotes[i]
     
    
    
};
