var fs = require('fs');

var DOMParser = require('xmldom').DOMParser;
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var JSON = require('JSON');

var scope = {
    XMLHttpRequest: XMLHttpRequest,
    DOMParser: DOMParser,
    JSON: JSON,

    execute: function (fileName) {
        filedata = fs.readFileSync(fileName, 'utf8');
        eval(filedata);
    }
};

scope.execute(__dirname + '/lib/datajs-1.1.2.js');

// access to generated services from our custom scope
module.exports.OData = scope.OData;
module.exports.datajs = scope.datajs;