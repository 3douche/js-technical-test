'use strict';

var _ = require('lodash');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

// Dispatcher
var AppDispatcher = require('../../dispatcher/AppDispatcher');

// Const
var IssueConst = require('../actions/IssueConst');

// Webservice
var IssueWebservice = require('../webservice/IssueWebservice');

var title = "";
var comments = [];

var IssueStore = assign({}, EventEmitter.prototype, {

    addChangeListener: function(callback){
        this.on(IssueConst.CHANGE_CONTENT, callback);
    },

    removeChangeListener: function(callback){
        this.removeListener(IssueConst.CHANGE_CONTENT, callback);
    },

    emitChange: function(){
        this.emit(IssueConst.CHANGE_CONTENT);
    },

    getTitle: function(){
        return title;
    },

    getComments: function(){
        return comments;
    }

});

function _wsGetIssueTitle(){
    IssueWebservice.getIssueTitle().then(function(data){
        var jsonData = JSON.parse(data);
        title = jsonData.title;
        IssueStore.emitChange();
    })
}

function _wsGetIssueComments(){
    IssueWebservice.getIssueComments().then(function(data){
        var jsonData = JSON.parse(data);
        comments = jsonData;
        IssueStore.emitChange();
    })
}

IssueStore.dispatchToken = AppDispatcher.register(function(action){

    switch (action.actionType){
        case IssueConst.GET_COMMENTS:
            _wsGetIssueTitle();
            _wsGetIssueComments();
            break;
    }

});

module.exports = IssueStore;