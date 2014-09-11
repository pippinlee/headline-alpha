// this file just uses the scraperjs to provide a module
// that can be used in the return file
var scraperjs = require('scraperjs');

function scrape(val){
  scraperjs.StaticScraper.create(val.url)
    .scrape(function($) {
        return $(val.query).map(function() {
            return $(this).text();
        }).get();
    }, function(news) {
      var headline = val.name + ': ';
        //console.log(headline + news);
        val(news);
    });
}

exports.scrape = scrape;