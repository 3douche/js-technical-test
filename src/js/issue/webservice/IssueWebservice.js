'use strict';

// Lib
var Q = require('q');

var IssueWebservice = {

    getIssueTitle: function(){
        var defer = Q.defer();

        var wsSuccess = function(){
            defer.resolve(this.responseText);
        };

        var request = new XMLHttpRequest();
        request.onload = wsSuccess;
        request.open('get', 'https://api.github.com/repos/nodejs/node/issues/6867');
        request.send();

        return defer.promise;
    },

    getIssueComments: function(){
        var defer = Q.defer();

        var wsSuccess = function(){
            defer.resolve(this.responseText);
        };

        var request = new XMLHttpRequest();
        request.onload = wsSuccess;
        request.open('get', 'https://api.github.com/repos/nodejs/node/issues/6867/comments');
        request.send();

        return defer.promise;
    }

};

module.exports = IssueWebservice;