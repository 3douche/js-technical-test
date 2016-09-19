'use strict';

var React = require('react');

// Actions
var IssueActions = require('../../issue/actions/IssueActions');

// Stores
var IssueStore = require('../../issue/store/IssueStore');

// Components
var LeftPanel = require('../../leftPanel/components/LeftPanel.react');
var RightPanel = require('../../rightPanel/components/RightPanel.react');

function _getStateFromStores() {
    return {
        title: IssueStore.getTitle(),
        users: IssueStore.getUsers(),
        comments: IssueStore.getComments()
    }
}

var App = React.createClass({

    getInitialState: function () {
        return _getStateFromStores();
    },

    componentWillMount: function () {
        IssueActions.getComments();
    },

    componentDidMount: function () {
        IssueStore.addChangeListener(this.onChange);
    },

    componentWillUnmount: function () {
        IssueStore.removeChangeListener(this.onChange);
    },

    onChange: function () {
        this.setState(_getStateFromStores);
    },

    render: function () {

        return (
            <div className="app-wrapper">
                <div className="issue-title">{this.state.title}</div>
                <div className="panel-wrapper">
                    <LeftPanel users={this.state.users}/>
                    <RightPanel comments={this.state.comments}/>
                </div>
            </div>
        );
    }

});

module.exports = App;