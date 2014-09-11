// this file uses my own module and should be able to
// take any news publication as a place and give back
// the headline

var news = require("./module.js");
var scraper = require("./scraper.js");

news.start(function(data){
  scraper.scrape(function(news){
    var place = data.canada.toronto.cbc.query;
    news(place);
  });
});

// using "module" you get the object and pass it to
// the scraper