'use strict';

var React = require('react');

// Actions
var IssueActions = require('../../issue/actions/IssueActions');

// Stores
var IssueStore = require('../../issue/store/IssueStore');

function _getStateFromStores(){
    return{
        comments: IssueStore.getComments()
    }
}

var App = React.createClass({

    getInitialState: function(){
        return _getStateFromStores();
    },

    componentWillMount: function(){
        IssueActions.getComments();
    },

    componentDidMount: function(){
        IssueStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function(){
        IssueStore.removeChangeListener(this.onChange);
    },

    onChange: function(){
        this.setState(_getStateFromStores);
    },

    render: function () {

        return (
            <div>{this.state.comments}</div>
        );
    }

});

module.exports = App;