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

    getComments: function(){
        return comments;
    }

});

function _wsGetComments(){
    IssueWebservice.getIssueDetails().then(function(data){
        comments = data;
        IssueStore.emitChange();
    })
}

IssueStore.dispatchToken = AppDispatcher.register(function(action){

    switch (action.actionType){
        case IssueConst.GET_COMMENTS:
            _wsGetComments();
            break;
    }

});

module.exports = IssueStore;