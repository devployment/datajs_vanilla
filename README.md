# datajs_vanilla
---
Simple wrapper for using the vanilla _datajs_ library in Node applications.

I was looking for a simple way of consuming an OData feed from a Node app.
First thing that came to my mind was using the "official" _datajs_ library as I used it once before in a browser app. But the existing datajs npm package is pretty aged. So I was looking for some way of using the current _datajs_ release. 


## Installation
```
npm install datajs_vanilla
```

## Usage
```
var OData = require('datajs').OData;
var url = "http://live.ineta.org/InetaLiveService.svc/LiveGroups(1)";

OData.read(url, function (data) {
    console.debug(data['Name']); //-> UT Dallas .NET UG
});
```

## Credits 
where they belong. 

[This stackoverflow question](http://stackoverflow.com/questions/5171213/load-vanilla-javascript-libraries-into-node-js) gave me the idea on how to use the datajs browser library in a Node environment.

## License
See included _LICENSE_ file for this package.

The bundled _datajs-1.1.2.js_ library is licensed on it's own. Check the [project page](http://datajs.codeplex.com/license) for further details.
