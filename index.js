const lexrank = require('lexrank');
const unfluff = require('unfluff');
const request = require('request');

function summarize(url, cb) {
  var page = {};

  request(url, (err, res, body) => {
    if (err || res.statusCode != 200) {
      return cb(err);
    }

    var content = unfluff(body);

    lexrank.summarize(content.text, 5, (err, top, summary) => {
      if (err) return cb(err);

      page.title = content.title;
      page.summary = summary;
      page.image = content.image;
      return cb(null, page);
    })
  })
}

module.exports = summarize;

// var topLines = lexrank.summarizePage(url, 3, function (err, topLines, text) {
//   if (err) {
//     console.log(err);
//   }
//   //console.log(topLines);

//   console.log(text);
// });
