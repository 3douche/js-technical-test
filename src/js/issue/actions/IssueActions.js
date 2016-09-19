'use strict';

// Const
var IssueConst = require('./IssueConst');

// Dispatcher
var AppDispatcher = require('../../dispatcher/AppDispatcher');

var IssueActions = {

    getComments: function(){
        AppDispatcher.dispatch({
            actionType: IssueConst.GET_COMMENTS
        });
    }
};

module.exports = IssueActions;