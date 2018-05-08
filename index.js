
$(function(){
  
  var txt;
  var link = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";
  
  var getRandomQuote = function () {
    fetch(link, {
       headers: new Headers({
      "X-Mashape-Authorization" : "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3"
       }),
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        $("#words").text(data.quote);
        $("#author").text("- " + data.author);
        txt = "https://twitter.com/intent/tweet?text=" + data.quote + "- " + data.author;
        $(".twitter-share-button").attr("href", txt);
      })
      .catch(function(error) {
        console.log(error.message);
        var collection = {
           1: ['He who has a "why" to live, can bear with almost any "how".', 'Friedrich Nietzsche'],
           2: ['I shall not waste my days in trying to prolong them.', 'Ian L. Fleming'],
           3: ['Facts are the enemy of truth.', 'Don Quixote'],
           4: ['A friendship founded on business is better than a business founded on friendship.', 'John D. Rockefeller'],
           5: ['If you are going through hell, keep going.', 'Sir Winston Churchill'],
           6: ['Give me a museum and Ill fill it.', 'Pablo Picasso']
        };
        var random = Math.ceil(Math.random() * Object.keys(collection).length);
        $("#words").text(collection[random][0]);
        $("#author").text("- " + collection[random][1]);
        txt = "https://twitter.com/intent/tweet?text=" + collection[random][0] + "- " + collection[random][1]; 
     });
};
  
  $(".container-fluid").css({
  'background-image' : 'url(https://source.unsplash.com/collection/142324/1600x900)'
   });
  
  getRandomQuote();
  $("#next").click(getRandomQuote);
  $(".twitter-share-button").click(function() {
    window.open(txt);
    return false;
  });
    
  // making it responsive to screen orientation
  if (screen.orientation.type === "portrait-secondary" || screen.orientation.type === "portrait-primary") {
   $("#tw, #next").removeClass("btn-md").addClass("btn-xs");   
   $("#quote").css({'height' : '110vw'});
   $("#area").css({'height' : '100vw'});
   $("#words, #author").css({'font-size' : '6vw'});
   $(".btn").css({'font-size' : '4vw'});
   $("#footer").css({'font-size' : '3vw', 'left' : '25%'});
  } 
}); 
