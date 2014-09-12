// this file just uses the scraperjs to provide a module
// that can be used in the return file
var scraperjs = require('scraperjs');

function scrape(val, callback){
  scraperjs.StaticScraper.create(val.url)
    .scrape(function($) {
      return $(val.query).map(function() {
        return $(this).text();
      }).get();
    }, function(news) {
      callback(null, news);
    });
  // TODO: Add error handling to the scraper - should call callback(err)
}

exports.scrape = scrape;
