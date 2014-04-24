var assert = require("assert");

describe('Simple smoke test', function(){
   describe('Can load data', function(){
    it('should return single result from ODATA feed', function(done){
        var OData = require('datajs_vanilla').OData;
        var url = "http://live.ineta.org/InetaLiveService.svc/LiveGroups(1)";

        OData.read(url, function (data) {
            assert.equal(data['Name'], 'UT Dallas .NET UG');

            done();
        });
    });
   });
});