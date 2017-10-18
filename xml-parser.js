var fs = require('fs');
var xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile('en_US.xml', function(err, data) {
    
    parser.parseString(data, function (err, result) {
    
        // console.dir(JSON.stringify(result));
        console.log(result);
    });
});



// // const convert = require('xml-js');
// const json2csv = require('json2csv');
// // var xml = require('fs').readFileSync('en_US.xml', 'utf8');

// // var options = {ignoreComment: true, alwaysChildren: true};
// // var result = convert.xml2json(xml, options); // or convert.xml2json(xml, options)
// // console.log(result);

// var convert = require('xml-js');
// var xml = require('fs').readFileSync('en_US.xml', 'UTF-8');
// var result = convert.xml2json(xml, {compact: true, spaces: 4});
// console.log(result);