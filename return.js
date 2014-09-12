// this file uses my own module and should be able to
// take any news publication as a place and give back
// the headline

var news = require("./module.js");
var scraper = require("./scraper.js");

news.start(function(err, data){
  if (err) {
    console.error(err);
    return;
  }

  var source = data.canada.toronto.cbc;
  scraper.scrape(source, function(err, news){
    if (err) console.error(err);

    console.log(news); // news(place); -- This isn't a function?
  });
});

// using "module" you get the object and pass it to
// the scraper
